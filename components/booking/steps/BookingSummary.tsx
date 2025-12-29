"use client";

import { BookingData } from "../BookingWizard";
import { CheckCircle } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface BookingSummaryProps {
    data: BookingData;
}

const VEHICLE_INFO: Record<string, { name: string; price: number }> = {
    executive: { name: "Executive Sedan (Toyota Camry)", price: 3500 },
    luxury: { name: "Luxury Sedan (Mercedes E-Class LWB)", price: 6500 },
    first: { name: "First Class (Mercedes S-Class)", price: 15000 },
    suv: { name: "Premium SUV (Audi Q7)", price: 9500 },
    mpv: { name: "Luxury MPV (Toyota Vellfire)", price: 12000 },
};

export function BookingSummary({ data }: BookingSummaryProps) {
    const vehicleInfo =
        VEHICLE_INFO[data.selectedVehicle || "executive"];

    return (
        <div>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
                Booking Summary
            </h2>

            {/* Trip Details */}
            <div className="bg-secondary/20 rounded-xl p-6 mb-6 border border-border/50">
                <h3 className="text-lg font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Trip Details
                </h3>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Service Type:</span>
                        <span className="font-semibold text-foreground capitalize">
                            {data.rideType === "one-way"
                                ? "One Way Transfer"
                                : "Hourly Service"}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Pickup:</span>
                        <span className="font-semibold text-foreground">
                            {data.pickupLocation}
                        </span>
                    </div>
                    {data.rideType === "one-way" && (
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Dropoff:</span>
                            <span className="font-semibold text-foreground">
                                {data.dropoffLocation}
                            </span>
                        </div>
                    )}
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Date & Time:</span>
                        <span className="font-semibold text-foreground">
                            {data.date} at {data.time}
                        </span>
                    </div>
                    {data.flightNumber && (
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Flight:</span>
                            <span className="font-semibold text-foreground">
                                {data.flightNumber}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Vehicle & Passenger Details */}
            <div className="bg-secondary/20 rounded-xl p-6 mb-6 border border-border/50">
                <h3 className="text-lg font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Vehicle & Passenger
                </h3>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Vehicle:</span>
                        <span className="font-semibold text-foreground">
                            {vehicleInfo.name}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Passenger:</span>
                        <span className="font-semibold text-foreground">
                            {data.passengerName}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Email:</span>
                        <span className="font-semibold text-foreground">
                            {data.passengerEmail}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Phone:</span>
                        <span className="font-semibold text-foreground">
                            {data.passengerPhone}
                        </span>
                    </div>
                </div>
            </div>

            {/* Price Summary */}
            <div className="bg-primary/10 rounded-xl p-6 border-2 border-primary/50">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-serif font-bold text-foreground">
                        Estimated Cost
                    </span>
                    <span className="text-3xl font-bold text-primary">
                        {formatCurrency(vehicleInfo.price)}
                    </span>
                </div>
                <p className="text-xs text-muted-foreground">
                    *Final price may vary based on traffic conditions and route distance. You'll receive a confirmation email shortly.
                </p>
            </div>

            {/* Info */}
            <div className="mt-8 p-4 rounded-lg bg-foreground/5 border border-border/50">
                <p className="text-sm text-foreground">
                    ✅ Your booking details have been reviewed. Click "Confirm Booking" to proceed with your reservation.
                </p>
            </div>
        </div>
    );
}
