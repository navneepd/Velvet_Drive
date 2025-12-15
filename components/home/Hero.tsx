"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Hero() {
    const router = useRouter();
    const [pickupLocation, setPickupLocation] = useState("");
    const [dropoffLocation, setDropoffLocation] = useState("");
    const [date, setDate] = useState("");

    const handleSearch = () => {
        console.log("Searching...", { pickupLocation, dropoffLocation, date });

        // Validate inputs
        if (!pickupLocation || !dropoffLocation || !date) {
            alert("Please fill in all fields");
            return;
        }

        // Build query string
        const params = new URLSearchParams({
            pickup: pickupLocation,
            dropoff: dropoffLocation,
            date: date,
        });

        // Redirect to booking page with query parameters
        router.push(`/book?${params.toString()}`);
    };

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background - In a real app, use a video or optimised image */}
            <div className="absolute inset-0 z-0 bg-secondary">
                {/* Placeholder for video */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/20 to-background/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 container px-4 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    Chauffeur Services <br /> <span className="text-primary">Redefined</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                    Experience the ultimate in luxury travel. Professional chauffeurs,
                    premium fleet, and seamless booking for your business and leisure needs.
                </p>

                {/* Booking Widget */}
                <div className="max-w-4xl mx-auto bg-card/80 backdrop-blur-md rounded-xl p-6 border border-border/50 shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        {/* Pickup Location */}
                        <div>
                            <label className="block text-xs font-semibold text-foreground/70 mb-2 text-left">
                                Pickup Location
                            </label>
                            <input
                                type="text"
                                value={pickupLocation}
                                onChange={(e) => setPickupLocation(e.target.value)}
                                placeholder="e.g., Airport"
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>

                        {/* Dropoff Location */}
                        <div>
                            <label className="block text-xs font-semibold text-foreground/70 mb-2 text-left">
                                Drop-off Location
                            </label>
                            <input
                                type="text"
                                value={dropoffLocation}
                                onChange={(e) => setDropoffLocation(e.target.value)}
                                placeholder="e.g., Hotel"
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block text-xs font-semibold text-foreground/70 mb-2 text-left">
                                Date
                            </label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>

                        {/* Search Button */}
                        <Button
                            onClick={handleSearch}
                            className="w-full h-12 text-lg font-semibold tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                        >
                            SEARCH
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
