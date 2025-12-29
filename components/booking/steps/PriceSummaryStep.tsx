"use client";

import { BookingData } from "../BookingForm";
import { Check, Info } from "lucide-react";

interface PriceSummaryStepProps {
    data: BookingData;
}

const VEHICLE_INFO: Record<string, { name: string; price: string; features: string[] }> = {
    business: {
        name: "Business Class",
        price: "$150",
        features: ["Mercedes E-Class", "2 Bags", "Free Cancellation"]
    },
    first: {
        name: "First Class",
        price: "$220",
        features: ["Mercedes S-Class", "3 Bags", "Concierge Service"]
    },
    van: {
        name: "V-Class",
        price: "$280",
        features: ["Mercedes V-Class", "5 Bags", "Group Travel"]
    },
};

export function PriceSummaryStep({ data }: PriceSummaryStepProps) {
    const info = VEHICLE_INFO[data.selectedVehicle || "business"];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-serif font-bold mb-2">Review Quote</h2>
                <p className="text-muted-foreground">Please review your journey details and estimated price.</p>
            </div>

            <div className="bg-card border-2 border-primary/20 rounded-xl overflow-hidden shadow-lg">
                <div className="bg-primary/5 p-6 border-b border-primary/10">
                    <div className="flex justify-between items-end">
                        <div className="text-left">
                            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Total Estimate</p>
                            <h3 className="text-4xl font-bold text-foreground">{info.price}</h3>
                            <p className="text-xs text-muted-foreground mt-1">All taxes and fees included</p>
                        </div>
                        <div className="text-right">
                            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                                Fixed Rate
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-4">
                    <div>
                        <h4 className="font-semibold text-lg mb-2">{info.name}</h4>
                        <ul className="space-y-2">
                            {info.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Check className="w-4 h-4 text-green-500" />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Pickup</span>
                            <span className="font-medium text-right max-w-[200px] truncate">{data.pickupLocation}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Dropoff</span>
                            <span className="font-medium text-right max-w-[200px] truncate">{data.dropoffLocation}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-secondary/30 p-4 rounded-lg flex gap-3">
                <Info className="w-5 h-5 text-primary shrink-0" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                    By clicking Next, you agree to our terms of service.
                    Your price is fixed unless there are significant route changes.
                </p>
            </div>
        </div>
    );
}
