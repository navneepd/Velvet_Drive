"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RideDetails } from "./steps/RideDetails";
import { VehicleSelection } from "./steps/VehicleSelection";
import { PassengerInfo } from "./steps/PassengerInfo";
import { BookingSummary } from "./steps/BookingSummary";

export interface BookingData {
    // Ride Details
    rideType: "one-way" | "hourly";
    pickupLocation: string;
    dropoffLocation: string;
    date: string;
    time: string;
    flightNumber?: string;

    // Vehicle Selection
    selectedVehicle?: string;

    // Passenger Info
    passengerName: string;
    passengerEmail: string;
    passengerPhone: string;
}

const INITIAL_BOOKING_DATA: BookingData = {
    rideType: "one-way",
    pickupLocation: "",
    dropoffLocation: "",
    date: "",
    time: "",
    flightNumber: "",
    selectedVehicle: "business",
    passengerName: "",
    passengerEmail: "",
    passengerPhone: "",
};

export function BookingWizard() {
    const searchParams = useSearchParams();
    const [currentStep, setCurrentStep] = useState(1);
    const [bookingData, setBookingData] = useState<BookingData>(INITIAL_BOOKING_DATA);

    // Pre-fill form with query parameters from Hero widget
    useEffect(() => {
        const pickup = searchParams.get("pickup");
        const dropoff = searchParams.get("dropoff");
        const date = searchParams.get("date");

        if (pickup || dropoff || date) {
            setBookingData((prev) => ({
                ...prev,
                pickupLocation: pickup || prev.pickupLocation,
                dropoffLocation: dropoff || prev.dropoffLocation,
                date: date || prev.date,
            }));
        }
    }, [searchParams]);

    const updateBookingData = (updates: Partial<BookingData>) => {
        setBookingData((prev) => ({ ...prev, ...updates }));
    };

    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleSubmit = () => {
        console.log("Booking Submitted:", bookingData);
        alert("Booking confirmed! Check console for details.");
        // In a real app, send this to your backend
    };

    return (
        <section className="py-20 px-4 bg-secondary/10 min-h-screen">
            <div className="container mx-auto max-w-2xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Book Your <span className="text-primary">Journey</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Step {currentStep} of 4
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-12 flex gap-2">
                    {[1, 2, 3, 4].map((step) => (
                        <div key={step} className="flex-1">
                            <div
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    step <= currentStep
                                        ? "bg-primary"
                                        : "bg-border"
                                }`}
                            />
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-12 shadow-lg">
                    {currentStep === 1 && (
                        <RideDetails
                            data={bookingData}
                            onUpdate={updateBookingData}
                        />
                    )}

                    {currentStep === 2 && (
                        <VehicleSelection
                            data={bookingData}
                            onUpdate={updateBookingData}
                        />
                    )}

                    {currentStep === 3 && (
                        <PassengerInfo
                            data={bookingData}
                            onUpdate={updateBookingData}
                        />
                    )}

                    {currentStep === 4 && (
                        <BookingSummary data={bookingData} />
                    )}

                    {/* Navigation Buttons */}
                    <div className="mt-12 flex gap-4 justify-between">
                        <Button
                            onClick={handlePrevious}
                            disabled={currentStep === 1}
                            variant="outline"
                            className="flex items-center gap-2"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Previous
                        </Button>

                        {currentStep < 4 ? (
                            <Button
                                onClick={handleNext}
                                className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
                            >
                                Next
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        ) : (
                            <Button
                                onClick={handleSubmit}
                                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-lg"
                            >
                                Confirm Booking
                            </Button>
                        )}
                    </div>
                </div>

                {/* Booking Info */}
                <div className="mt-8 text-center text-sm text-muted-foreground">
                    <p>💬 Need help? Contact our team at +1 (555) 123-4567</p>
                </div>
            </div>
        </section>
    );
}
