"use client";

import { useMemo } from "react";
import { SmartLocationInput } from "../SmartLocationInput";
import { BookingData } from "../BookingForm";
import { MapPin } from "lucide-react";

interface DropStepProps {
    data: BookingData;
    onUpdate: (updates: Partial<BookingData>) => void;
}

export function DropStep({ data, onUpdate }: DropStepProps) {
    const isValid = useMemo(() => data.dropoffLocation.length > 3, [data.dropoffLocation]);

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-serif font-bold mb-2">Where is your destination?</h2>
                <p className="text-muted-foreground">Enter your drop-off address or location.</p>
            </div>

            <div className="max-w-md mx-auto">
                <SmartLocationInput
                    label="Drop-off Location"
                    value={data.dropoffLocation}
                    onChange={(val) => onUpdate({ dropoffLocation: val })}
                    placeholder="e.g. Gatwick North or Home Address"
                    icon={<MapPin className="w-5 h-5 text-red-500" />}
                />

                <div className="mt-8 p-4 bg-secondary/50 rounded-lg border border-border/50 text-sm text-muted-foreground">
                    <p>
                        <strong>Note:</strong> Calculate travel time carefully if catching a flight.
                        We recommend arriving at airports 2-3 hours before departure.
                    </p>
                </div>
            </div>
        </div>
    );
}
