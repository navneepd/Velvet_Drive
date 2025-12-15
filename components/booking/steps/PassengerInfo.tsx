"use client";

import { BookingData } from "../BookingWizard";

interface PassengerInfoProps {
    data: BookingData;
    onUpdate: (updates: Partial<BookingData>) => void;
}

export function PassengerInfo({ data, onUpdate }: PassengerInfoProps) {
    return (
        <div>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
                Passenger Information
            </h2>

            {/* Name */}
            <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    value={data.passengerName}
                    onChange={(e) =>
                        onUpdate({ passengerName: e.target.value })
                    }
                    placeholder="e.g., John Smith"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
            </div>

            {/* Email */}
            <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    value={data.passengerEmail}
                    onChange={(e) =>
                        onUpdate({ passengerEmail: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
            </div>

            {/* Phone */}
            <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                    type="tel"
                    value={data.passengerPhone}
                    onChange={(e) =>
                        onUpdate({ passengerPhone: e.target.value })
                    }
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
            </div>

            {/* Info Box */}
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm text-foreground">
                    ℹ️ We'll use this information to confirm your booking and provide driver details.
                </p>
            </div>
        </div>
    );
}
