import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const vehicles = [
    {
        id: "business",
        name: "Business Class",
        model: "Mercedes E-Class",
        description: "Executive travel for up to 4 passengers",
        longDescription: "Perfect for business travelers and professionals. The Mercedes E-Class offers premium comfort with state-of-the-art climate control, premium audio systems, and complimentary Wi-Fi connectivity.",
        specs: ["4 Passengers", "Premium Comfort", "Climate Control", "Premium Audio", "Wi-Fi Connectivity", "Complimentary Beverages"],
        price: "₹12,000 - ₹16,000",
        icon: "🚗",
    },
    {
        id: "first",
        name: "First Class",
        model: "Mercedes S-Class",
        description: "Ultimate luxury experience for up to 4 passengers",
        longDescription: "Our flagship vehicle. The Mercedes S-Class is the pinnacle of automotive luxury. Featuring hand-stitched leather interiors, panoramic sunroofs, heated massage seats, and the finest in-cabin technology.",
        specs: ["4 Passengers", "Maximum Elegance", "Premium Audio System", "Heated Massage Seats", "Panoramic Sunroof", "Champagne Service"],
        price: "₹18,000 - ₹25,000",
        icon: "👑",
    },
    {
        id: "van",
        name: "V-Class",
        model: "Mercedes V-Class",
        description: "Perfect for groups and large parties",
        longDescription: "Ideal for group travel, corporate events, and family outings. The Mercedes V-Class accommodates 6-7 passengers with spacious interiors, individual climate zones, and premium seating arrangements.",
        specs: ["6-7 Passengers", "Spacious Interior", "Individual Climate Zones", "Premium Seating", "Luggage Space", "Flexible Configurations"],
        price: "₹22,000 - ₹28,000",
        icon: "🚐",
    },
];

export default function FleetPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Header */}
            <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
                        Our <span className="text-primary">Fleet</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover our meticulously maintained collection of premium vehicles, each designed for the ultimate luxury experience.
                    </p>
                </div>
            </section>

            {/* Fleet Grid */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {vehicles.map((vehicle) => (
                            <Card
                                key={vehicle.id}
                                className="overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
                            >
                                {/* Vehicle Image Placeholder */}
                                <div className="h-56 bg-gradient-to-br from-secondary to-background flex items-center justify-center group-hover:from-secondary/80 group-hover:to-background/80 transition-all duration-300">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">{vehicle.icon}</div>
                                        <p className="text-sm text-muted-foreground font-semibold">
                                            {vehicle.model}
                                        </p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                                        {vehicle.name}
                                    </h3>
                                    <p className="text-primary font-semibold mb-4">
                                        {vehicle.description}
                                    </p>
                                    <p className="text-muted-foreground text-sm mb-6">
                                        {vehicle.longDescription}
                                    </p>

                                    {/* Specs */}
                                    <div className="mb-6 space-y-2">
                                        {vehicle.specs.map((spec, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {spec}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Price */}
                                    <div className="border-t border-border/50 pt-4 mb-6">
                                        <p className="text-sm text-muted-foreground mb-2">Estimated Price</p>
                                        <p className="text-2xl font-bold text-primary">{vehicle.price}</p>
                                    </div>

                                    {/* Button */}
                                    <Link href="/book">
                                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                            Book This Vehicle
                                        </Button>
                                    </Link>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Info Section */}
            <section className="py-20 px-4 bg-secondary/10">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-8">
                        Why Choose Our Fleet?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-card rounded-xl border border-border/50">
                            <div className="text-4xl mb-4">✨</div>
                            <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                                Immaculate Condition
                            </h3>
                            <p className="text-muted-foreground">
                                Every vehicle is meticulously maintained and detailed to perfection.
                            </p>
                        </div>

                        <div className="p-8 bg-card rounded-xl border border-border/50">
                            <div className="text-4xl mb-4">🛡️</div>
                            <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                                Safety First
                            </h3>
                            <p className="text-muted-foreground">
                                All vehicles undergo rigorous safety inspections and certifications.
                            </p>
                        </div>

                        <div className="p-8 bg-card rounded-xl border border-border/50">
                            <div className="text-4xl mb-4">⏰</div>
                            <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                                Reliability
                            </h3>
                            <p className="text-muted-foreground">
                                On-time, every time. Our fleet is always ready when you need us.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                        Ready to Experience <span className="text-primary">Premium Travel?</span>
                    </h2>
                    <Link href="/book">
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                            Book Your Journey Now
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
