"use client";

import { BookingData } from "../BookingWizard";

interface RideDetailsProps {
    data: BookingData;
    onUpdate: (updates: Partial<BookingData>) => void;
}

export function RideDetails({ data, onUpdate }: RideDetailsProps) {
    return (
        <div>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
                Trip Details
            </h2>

            {/* Ride Type Toggle */}
            <div className="mb-8">
                <label className="block text-sm font-semibold text-foreground mb-4">
                    Type of Service
                </label>
                <div className="flex gap-4">
                    <button
                        onClick={() => onUpdate({ rideType: "one-way" })}
                        className={`flex-1 py-4 px-6 rounded-lg border-2 font-semibold transition-all ${
                            data.rideType === "one-way"
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border bg-background text-foreground hover:border-primary/50"
                        }`}
                    >
                        One Way Transfer
                    </button>
                    <button
                        onClick={() => onUpdate({ rideType: "hourly" })}
                        className={`flex-1 py-4 px-6 rounded-lg border-2 font-semibold transition-all ${
                            data.rideType === "hourly"
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border bg-background text-foreground hover:border-primary/50"
                        }`}
                    >
                        Hourly Service
                    </button>
                </div>
            </div>

            {/* Pickup Location */}
            <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                    Pickup Location <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    value={data.pickupLocation}
                    onChange={(e) =>
                        onUpdate({ pickupLocation: e.target.value })
                    }
                    placeholder="e.g., 123 Main St or John F. Kennedy Airport"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
            </div>

            {/* Dropoff Location - Hide for Hourly */}
            {data.rideType === "one-way" && (
                <div className="mb-6">
                    <label className="block text-sm font-semibold text-foreground mb-2">
                        Drop-off Location <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={data.dropoffLocation}
                        onChange={(e) =>
                            onUpdate({ dropoffLocation: e.target.value })
                        }
                        placeholder="e.g., 456 Park Ave"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                </div>
            )}

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                        Date <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        value={data.date}
                        onChange={(e) => onUpdate({ date: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                        Time <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="time"
                        value={data.time}
                        onChange={(e) => onUpdate({ time: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                </div>
            </div>

            {/* Flight Number - Optional */}
            <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                    Flight Number <span className="text-xs text-muted-foreground">(Optional)</span>
                </label>
                <input
                    type="text"
                    value={data.flightNumber || ""}
                    onChange={(e) =>
                        onUpdate({ flightNumber: e.target.value })
                    }
                    placeholder="e.g., AA123"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
            </div>
        </div>
    );
}
