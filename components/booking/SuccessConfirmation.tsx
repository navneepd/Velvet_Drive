"use client";

import { CheckCircle, Car, MapPin, Calendar, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingData } from "./BookingForm";

interface SuccessConfirmationProps {
    bookingRef: string;
    data: BookingData;
    onReset: () => void;
}

export function SuccessConfirmation({ bookingRef, data, onReset }: SuccessConfirmationProps) {
    return (
        <div className="text-center animate-in fade-in zoom-in-95 duration-500 py-8">
            <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Booking Confirmed!</h2>
            <p className="text-muted-foreground mb-8">
                Your booking reference is <span className="font-mono font-bold text-primary">{bookingRef}</span>
            </p>

            <div className="bg-secondary/20 rounded-xl p-6 mb-8 max-w-md mx-auto border border-border/50 text-left space-y-4">
                <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                        <p className="text-xs text-muted-foreground">Route</p>
                        <p className="text-sm font-medium">{data.pickupLocation}</p>
                        <div className="pl-0.5 py-1">↓</div>
                        <p className="text-sm font-medium">{data.dropoffLocation}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Calendar className="w-5 h-5 text-primary shrink-0" />
                    <div>
                        <p className="text-xs text-muted-foreground">Date & Time</p>
                        <p className="text-sm font-medium">{data.date} at {data.time}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Car className="w-5 h-5 text-primary shrink-0" />
                    <div>
                        <p className="text-xs text-muted-foreground">Vehicle</p>
                        <p className="text-sm font-medium capitalize">{data.selectedVehicle?.replace("-", " ")}</p>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 p-4 rounded-lg mb-8 max-w-md mx-auto text-sm">
                Our team or partner agency will contact you shortly at <strong>{data.passengerEmail}</strong> to finalize details.
            </div>

            <Button onClick={onReset} variant="outline" className="gap-2">
                <RefreshCcw className="w-4 h-4" />
                Book Another Journey
            </Button>
        </div>
    );
}
