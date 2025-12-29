"use client";

import { Check } from "lucide-react";
import { BookingData } from "../BookingWizard";
import { formatCurrency } from "@/lib/utils";

interface VehicleSelectionProps {
    data: BookingData;
    onUpdate: (updates: Partial<BookingData>) => void;
}

const VEHICLES = [
    {
        id: "business",
        name: "Business Class",
        model: "Mercedes E-Class",
        description: "Executive travel for up to 4 passengers",
        price: 12000,
        icon: "🚗",
        features: ["4 Passengers", "Premium Comfort", "Climate Control"],
    },
    {
        id: "first",
        name: "First Class",
        model: "Mercedes S-Class",
        description: "Ultimate luxury experience",
        price: 18000,
        icon: "👑",
        features: ["4 Passengers", "Maximum Elegance", "Premium Audio"],
    },
    {
        id: "van",
        name: "V-Class",
        model: "Mercedes V-Class",
        description: "Perfect for groups and large parties",
        price: 22000,
        icon: "🚐",
        features: ["6-7 Passengers", "Spacious Interior", "Comfortable Seating"],
    },
];

export function VehicleSelection({ data, onUpdate }: VehicleSelectionProps) {
    return (
        <div>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                Select Your Vehicle
            </h2>
            <p className="text-muted-foreground mb-8">
                Choose the perfect vehicle for your journey
            </p>

            <div className="space-y-4">
                {VEHICLES.map((vehicle) => (
                    <button
                        key={vehicle.id}
                        onClick={() => onUpdate({ selectedVehicle: vehicle.id })}
                        className={`w-full p-6 rounded-xl border-2 transition-all text-left ${data.selectedVehicle === vehicle.id
                            ? "border-primary bg-primary/5"
                            : "border-border bg-background hover:border-primary/50"
                            }`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-4">
                                <div className="text-4xl">{vehicle.icon}</div>
                                <div>
                                    <h3 className="text-xl font-serif font-bold text-foreground">
                                        {vehicle.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {vehicle.model}
                                    </p>
                                    <p className="text-sm text-foreground mt-1">
                                        {vehicle.description}
                                    </p>
                                </div>
                            </div>

                            <div className="text-right">
                                <div className="text-2xl font-bold text-primary mb-2">
                                    {formatCurrency(vehicle.price)}
                                </div>
                                {data.selectedVehicle === vehicle.id && (
                                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                        <Check className="w-4 h-4 text-primary-foreground" />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {vehicle.features.map((feature, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
