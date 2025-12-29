"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Navigation, Loader2, Train, Building2, Plane } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SmartLocationInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    icon?: React.ReactNode;
    className?: string;
}

interface Suggestion {
    name: string;
    type: "Airport" | "Station" | "City" | "Landmark";
    lat: number;
    lon: number;
    code?: string;
}

// Default to major Indian hubs (India-first strategy)
const INDIAN_SUGGESTIONS: Suggestion[] = [
    { name: "Indira Gandhi International Airport (DEL)", type: "Airport", lat: 28.5562, lon: 77.1000, code: "DEL" },
    { name: "Chhatrapati Shivaji Maharaj Int'l (BOM)", type: "Airport", lat: 19.0896, lon: 72.8656, code: "BOM" },
    { name: "Kempegowda International Airport (BLR)", type: "Airport", lat: 13.1986, lon: 77.7066, code: "BLR" },
    { name: "Lokpriya Gopinath Bordoloi Int'l (GAU)", type: "Airport", lat: 26.1061, lon: 91.5859, code: "GAU" },
    { name: "Chennai International Airport (MAA)", type: "Airport", lat: 12.9941, lon: 80.1709, code: "MAA" },
    { name: "New Delhi Railway Station", type: "Station", lat: 28.6429, lon: 77.2191 },
    { name: "Chhatrapati Shivaji Terminus (CST)", type: "Station", lat: 18.9401, lon: 72.8347 },
    { name: "Gateway of India, Mumbai", type: "Landmark", lat: 18.9220, lon: 72.8347 },
    { name: "Taj Mahal Palace, Mumbai", type: "Landmark", lat: 18.9217, lon: 72.8330 },
    { name: "Connaught Place, New Delhi", type: "City", lat: 28.6304, lon: 77.2177 },
];

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

export function SmartLocationInput({
    value,
    onChange,
    placeholder = "Enter pickup location",
    label,
    icon,
    className
}: SmartLocationInputProps) {
    const [suggestions, setSuggestions] = useState<Suggestion[]>(INDIAN_SUGGESTIONS);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);
    const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Initial location check to bias results (Silent)
    useEffect(() => {
        if (typeof window !== "undefined" && "geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lon: longitude });

                    // Sort suggestions by distance
                    const sorted = [...INDIAN_SUGGESTIONS].sort((a, b) => {
                        const distA = calculateDistance(latitude, longitude, a.lat, a.lon);
                        const distB = calculateDistance(latitude, longitude, b.lat, b.lon);
                        return distA - distB;
                    });
                    setSuggestions(sorted);
                },
                (err) => {
                    // Silently fail and keep default India/Manual sort
                    console.debug("Location access denied or error, using defaults.", err);
                },
                { timeout: 10000, maximumAge: 60000 }
            );
        }
    }, []);

    // Handle outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        onChange(val);

        if (val.length > 0) {
            const lowerVal = val.toLowerCase();
            const filtered = (userLocation ? suggestions : INDIAN_SUGGESTIONS).filter(item =>
                item.name.toLowerCase().includes(lowerVal) ||
                (item.code && item.code.toLowerCase().includes(lowerVal))
            );
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            // Show all (sorted if location data exists)
            setSuggestions(userLocation ? suggestions : INDIAN_SUGGESTIONS);
            setShowSuggestions(false); // optionally hide when empty? Or show recent? strict matching implies hide.
        }
    };

    const handleUseCurrentLocation = () => {
        setIsLoadingLocation(true);
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    // In a real app, call Reverse Geocoding API
                    setTimeout(() => {
                        const mockAddress = `Current Location (${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)})`;
                        onChange(mockAddress);
                        setIsLoadingLocation(false);
                        setShowSuggestions(false);
                    }, 800);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setIsLoadingLocation(false);
                    alert("Could not access location. Please check browser permissions.");
                },
                { timeout: 10000 }
            );
        } else {
            setIsLoadingLocation(false);
            alert("Geolocation is not supported by your browser.");
        }
    };

    const getIconForType = (type: string) => {
        switch (type) {
            case "Airport": return <Plane className="w-4 h-4 text-blue-500" />;
            case "Station": return <Train className="w-4 h-4 text-orange-500" />;
            case "Landmark": return <Building2 className="w-4 h-4 text-purple-500" />;
            default: return <MapPin className="w-4 h-4 text-gray-500" />;
        }
    };

    return (
        <div className={cn("relative", className)} ref={wrapperRef}>
            {label && (
                <label className="block text-sm font-medium text-foreground mb-1.5 ml-1">
                    {label}
                </label>
            )}
            <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary">
                    {icon || <MapPin className="w-5 h-5" />}
                </div>

                <Input
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    onFocus={() => setShowSuggestions(true)}
                    placeholder={placeholder}
                    className="pl-10 pr-12 h-12 text-base bg-background border-input transition-all focus:ring-2 focus:ring-primary/20"
                />

                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full"
                        onClick={handleUseCurrentLocation}
                        title="Use Current Location"
                        disabled={isLoadingLocation}
                    >
                        {isLoadingLocation ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <Navigation className="w-4 h-4" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
                <div className="absolute z-50 w-full mt-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <ul className="py-1 max-h-[300px] overflow-y-auto">
                        {suggestions.map((item, idx) => (
                            <li key={idx}>
                                <button
                                    type="button"
                                    className="w-full text-left px-4 py-3 hover:bg-secondary/50 transition-colors flex items-center gap-3 group"
                                    onClick={() => {
                                        onChange(item.name);
                                        setShowSuggestions(false);
                                    }}
                                >
                                    <div className="bg-secondary p-2 rounded-full group-hover:bg-background transition-colors">
                                        {getIconForType(item.type)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">{item.type}</p>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
