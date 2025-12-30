"use client";

import { BookingData } from "../BookingForm";
import { PassengerInfo } from "./PassengerInfo";

interface ConfirmationStepProps {
    data: BookingData;
    onUpdate: (updates: Partial<BookingData>) => void;
}

export function ConfirmationStep({ data, onUpdate }: ConfirmationStepProps) {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-serif font-bold mb-2">Passenger Details</h2>
                <p className="text-muted-foreground">Who will be travelling with us?</p>
            </div>

            <PassengerInfo data={data} onUpdate={onUpdate} />

            {/* Agent Reference Field */}
            <div className="pt-6 border-t border-border/50">
                <h3 className="text-sm font-semibold mb-3 text-foreground">Agency / Corporate Reference</h3>
                <input
                    type="text"
                    value={data.agentReference || ""}
                    onChange={(e) => onUpdate({ agentReference: e.target.value })}
                    placeholder="Enter Agent Code or PO Number (Optional)"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
                <p className="text-xs text-muted-foreground mt-2">
                    Start piling up commission? Join our partner program today.
                </p>
            </div>
        </div>
    );
}
