"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

// New Steps
import { PickupStep } from "./steps/PickupStep";
import { DropStep } from "./steps/DropStep";
import { DateTimeStep } from "./steps/DateTimeStep";
import { VehicleSelection } from "./steps/VehicleSelection";
import { PriceSummaryStep } from "./steps/PriceSummaryStep";
import { ConfirmationStep } from "./steps/ConfirmationStep";
import { SuccessConfirmation } from "./SuccessConfirmation";

export interface BookingData {
    rideType: "one-way" | "hourly";
    pickupLocation: string;
    dropoffLocation: string;
    date: string;
    time: string;
    flightNumber?: string;
    selectedVehicle?: string;
    passengerName: string;
    passengerEmail: string;
    passengerPhone: string;
    agentReference?: string;
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

const TOTAL_STEPS = 6;

export function BookingForm() {
    const searchParams = useSearchParams();
    const [currentStep, setCurrentStep] = useState(1);
    const [bookingData, setBookingData] = useState<BookingData>(INITIAL_BOOKING_DATA);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [bookingRef, setBookingRef] = useState("");

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
        if (currentStep < TOTAL_STEPS) {
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

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Generate random reference
        const ref = "VD-" + Math.random().toString(36).substr(2, 6).toUpperCase();
        setBookingRef(ref);
        setIsSuccess(true);
        setIsSubmitting(false);

        // Save to local storage for Agency Dashboard (Pilot)
        const newBooking = {
            id: ref,
            date: bookingData.date,
            time: bookingData.time,
            pickup: bookingData.pickupLocation,
            drop: bookingData.dropoffLocation,
            vehicle: bookingData.selectedVehicle?.replace(/-/g, " ") || "Exec",
            status: "Pending",
            agentRef: bookingData.agentReference || "",
            source: "live"
        };

        try {
            const existing = JSON.parse(localStorage.getItem("vd_bookings") || "[]");
            localStorage.setItem("vd_bookings", JSON.stringify([newBooking, ...existing]));
        } catch (e) {
            console.error("Failed to save booking locally", e);
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleReset = () => {
        setBookingData(INITIAL_BOOKING_DATA);
        setCurrentStep(1);
        setIsSuccess(false);
        setBookingRef("");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Validation Logic for Navigation
    const canProceed = () => {
        switch (currentStep) {
            case 1: return bookingData.pickupLocation.length > 3;
            case 2: return bookingData.dropoffLocation.length > 3;
            case 3: return bookingData.date && bookingData.time;
            case 4: return !!bookingData.selectedVehicle;
            case 5: return true; // Review step
            case 6: return bookingData.passengerName && bookingData.passengerEmail && bookingData.passengerPhone;
            default: return false;
        }
    };

    return (
        <section className="py-20 px-4 bg-secondary/10 min-h-screen">
            <div className="container mx-auto max-w-2xl">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                        Book Your <span className="text-primary">Journey</span>
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <span className={currentStep >= 1 ? "text-primary font-medium" : ""}>Route</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className={currentStep >= 4 ? "text-primary font-medium" : ""}>Vehicle</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className={currentStep === 6 ? "text-primary font-medium" : ""}>Confirm</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-10">
                    <div className="flex gap-1 h-1.5 w-full bg-border/30 rounded-full overflow-hidden">
                        {[...Array(TOTAL_STEPS)].map((_, i) => (
                            <div
                                key={i}
                                className={`flex-1 transition-all duration-500 ${i + 1 <= currentStep ? "bg-primary" : "bg-transparent"
                                    }`}
                            />
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <span>Step {currentStep} of {TOTAL_STEPS}</span>
                        <span>{Math.round((currentStep / TOTAL_STEPS) * 100)}% Complete</span>
                    </div>
                </div>

                {/* Step Content */}
                <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-10 shadow-xl min-h-[400px] flex flex-col justify-between">
                    {isSuccess ? (
                        <SuccessConfirmation
                            bookingRef={bookingRef}
                            data={bookingData}
                            onReset={handleReset}
                        />
                    ) : (
                        <>
                            <div className="mb-8">
                                {currentStep === 1 && <PickupStep data={bookingData} onUpdate={updateBookingData} />}
                                {currentStep === 2 && <DropStep data={bookingData} onUpdate={updateBookingData} />}
                                {currentStep === 3 && <DateTimeStep data={bookingData} onUpdate={updateBookingData} />}
                                {currentStep === 4 && <VehicleSelection data={bookingData} onUpdate={updateBookingData} />}
                                {currentStep === 5 && <PriceSummaryStep data={bookingData} />}
                                {currentStep === 6 && <ConfirmationStep data={bookingData} onUpdate={updateBookingData} />}
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex gap-4 justify-between pt-6 border-t border-border/30">
                                <Button
                                    onClick={handlePrevious}
                                    disabled={currentStep === 1 || isSubmitting}
                                    variant="outline"
                                    className="flex items-center gap-2"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    Back
                                </Button>

                                {currentStep < TOTAL_STEPS ? (
                                    <Button
                                        onClick={handleNext}
                                        disabled={!canProceed()}
                                        className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 px-8 shadow-md hover:shadow-lg transition-all"
                                    >
                                        Next Step
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleSubmit}
                                        disabled={!canProceed() || isSubmitting}
                                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-lg w-full md:w-auto shadow-xl hover:shadow-2xl transition-all"
                                    >
                                        {isSubmitting ? "Confirming..." : "Confirm Booking"}
                                    </Button>
                                )}
                            </div>
                        </>
                    )}
                </div>

                {/* Trust Footer */}
                <div className="mt-8 text-center flex flex-col items-center gap-3">
                    <p className="text-sm text-muted-foreground">
                        🔒 SSL Secured Transaction • 24/7 Customer Support
                    </p>
                    <div className="text-xs text-muted-foreground/60">
                        Need assistance? Call our concierge at +44 20 7123 4567
                    </div>
                </div>
            </div>
        </section>
    );
}
