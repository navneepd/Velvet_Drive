"use client";

import { Plane, Clock, Sparkles } from "lucide-react";

const services = [
    {
        icon: Plane,
        title: "Airport Transfers",
        description:
            "Seamless pickups and drop-offs with flight tracking. Arrive refreshed and on time, every time.",
    },
    {
        icon: Clock,
        title: "Hourly Service",
        description:
            "Book by the hour for flexible travel. Perfect for sightseeing, shopping, or business commitments.",
    },
    {
        icon: Sparkles,
        title: "Event Transport",
        description:
            "Elevate your special occasions. Professional chauffeurs for weddings, galas, and corporate events.",
    },
];

export function Services() {
    return (
        <section className="py-20 px-4 bg-secondary/30">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Premium <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Tailored solutions for every journey, designed with your comfort in mind.
                    </p>
                </div>

                <div className="space-y-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row items-start md:items-center gap-8 p-8 bg-background rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 border border-primary/20">
                                        <IconComponent className="w-8 h-8 text-primary" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground text-lg">{service.description}</p>
                                </div>

                                {/* Arrow */}
                                <div className="flex-shrink-0 text-primary text-2xl opacity-50 group-hover:opacity-100">
                                    →
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
