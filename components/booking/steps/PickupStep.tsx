"use client";

import { useMemo } from "react";
import { SmartLocationInput } from "../SmartLocationInput";
import { BookingData } from "../BookingForm";
import { MapPin } from "lucide-react";

interface PickupStepProps {
    data: BookingData;
    onUpdate: (updates: Partial<BookingData>) => void;
}

export function PickupStep({ data, onUpdate }: PickupStepProps) {
    const isValid = useMemo(() => data.pickupLocation.length > 3, [data.pickupLocation]);

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-serif font-bold mb-2">Where shall we collect you?</h2>
                <p className="text-muted-foreground">Enter your pickup address, airport, or hotel.</p>
            </div>

            <div className="max-w-md mx-auto">
                <SmartLocationInput
                    label="Pickup Location"
                    value={data.pickupLocation}
                    onChange={(val) => onUpdate({ pickupLocation: val })}
                    placeholder="e.g. Heathrow T5 or The Savoy"
                    icon={<MapPin className="w-5 h-5 text-green-500" />}
                />

                {data.pickupLocation && !isValid && (
                    <p className="text-yellow-600 text-sm mt-2">
                        Please enter a specific location (at least 4 characters).
                    </p>
                )}
            </div>
        </div>
    );
}
