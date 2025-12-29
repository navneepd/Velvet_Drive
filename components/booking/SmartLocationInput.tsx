"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Navigation, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SmartLocationInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    icon?: React.ReactNode;
    className?: string;
}

// Mock premium suggestions for the "Smart" feel
const PREMIUM_SUGGESTIONS = [
    { name: "Heathrow Airport (LHR)", type: "Airport" },
    { name: "Gatwick Airport (LGW)", type: "Airport" },
    { name: "The Savoy, London", type: "Hotel" },
    { name: "The Ritz London", type: "Hotel" },
    { name: "Canary Wharf, London", type: "Business" },
    { name: "St Pancras International", type: "Station" },
];

export function SmartLocationInput({
    value,
    onChange,
    placeholder = "Enter location",
    label,
    icon,
    className
}: SmartLocationInputProps) {
    const [suggestions, setSuggestions] = useState<typeof PREMIUM_SUGGESTIONS>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

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
            const filtered = PREMIUM_SUGGESTIONS.filter(item =>
                item.name.toLowerCase().includes(val.toLowerCase())
            );
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    const handleUseCurrentLocation = () => {
        setIsLoadingLocation(true);

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    // In a real app, use Reverse Geocoding API here.
                    // mocking it for the demo as per instructions.
                    setTimeout(() => {
                        const mockAddress = "Unknown Location (Lat: " + position.coords.latitude.toFixed(4) + ")";
                        // For better UX in this demo, let's pretend we found a nice spot
                        onChange("Current Location (detected)");
                        setIsLoadingLocation(false);
                        setShowSuggestions(false);
                    }, 1000);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setIsLoadingLocation(false);
                    alert("Could not access location. Please enter manually.");
                }
            );
        } else {
            setIsLoadingLocation(false);
            alert("Geolocation is not supported by your browser.");
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
                    onFocus={() => {
                        if (value.length > 0) setShowSuggestions(true);
                    }}
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
                    <ul className="py-1">
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
                                        <MapPin className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">{item.name}</p>
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
