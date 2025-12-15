"use client";

import { Card } from "@/components/ui/card";

const fleetData = [
    {
        name: "Business Class",
        model: "Mercedes E-Class",
        description: "Executive travel.",
        specs: "4 Passengers • Premium Comfort",
    },
    {
        name: "First Class",
        model: "Mercedes S-Class",
        description: "Ultimate luxury.",
        specs: "4 Passengers • Maximum Elegance",
    },
    {
        name: "V-Class",
        model: "Mercedes V-Class",
        description: "Group travel.",
        specs: "6-7 Passengers • Spacious Interior",
    },
];

export function Fleet() {
    return (
        <section className="py-20 px-4 bg-background">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Our <span className="text-primary">Fleet</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover our carefully curated selection of premium vehicles, each tailored for a unique experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {fleetData.map((vehicle, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-secondary to-background flex items-center justify-center group-hover:from-secondary/80 group-hover:to-background/80 transition-all duration-300">
                                <div className="text-center">
                                    <div className="text-5xl text-primary/40 mb-2">🚗</div>
                                    <p className="text-sm text-muted-foreground">{vehicle.model}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                                    {vehicle.name}
                                </h3>
                                <p className="text-primary font-semibold mb-4">{vehicle.description}</p>
                                <p className="text-sm text-muted-foreground mb-6">{vehicle.specs}</p>

                                <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
