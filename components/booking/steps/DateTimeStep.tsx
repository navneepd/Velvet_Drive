"use client";

import { BookingData } from "../BookingForm";
import { Calendar, Clock } from "lucide-react";

interface DateTimeStepProps {
    data: BookingData;
    onUpdate: (updates: Partial<BookingData>) => void;
}

export function DateTimeStep({ data, onUpdate }: DateTimeStepProps) {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-serif font-bold mb-2">When do you need us?</h2>
                <p className="text-muted-foreground">Select your preferred date and pickup time.</p>
            </div>

            <div className="max-w-md mx-auto grid gap-6">
                <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5 ml-1">
                        Pickup Date
                    </label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="date"
                            value={data.date}
                            onChange={(e) => onUpdate({ date: e.target.value })}
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5 ml-1">
                        Pickup Time
                    </label>
                    <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="time"
                            value={data.time}
                            onChange={(e) => onUpdate({ time: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>
                </div>

                {/* Flight Number (Optional) */}
                <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5 ml-1">
                        Flight Number <span className="text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <input
                        type="text"
                        value={data.flightNumber || ""}
                        onChange={(e) => onUpdate({ flightNumber: e.target.value })}
                        placeholder="e.g. BA249"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <p className="text-xs text-muted-foreground mt-1 ml-1">
                        We monitor flights for delays to ensure we're there when you land.
                    </p>
                </div>
            </div>
        </div>
    );
}
