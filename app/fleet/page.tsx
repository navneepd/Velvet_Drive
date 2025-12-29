import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const vehicles = [
    {
        id: "executive",
        name: "Executive Sedan",
        model: "Toyota Camry Hybrid",
        description: "Reliable comfort for business travel",
        longDescription: "The smart choice for corporate mobility. The Toyota Camry Hybrid offers a quiet, refined ride with ample legroom, making it perfect for airport transfers and city meetings.",
        specs: ["3 Passengers", "2 Bags", "Hybrid Silent Ride", "Climate Control", "Device Charging"],
        price: "₹3,500 - ₹5,000",
        icon: "🚗",
    },
    {
        id: "luxury",
        name: "Luxury Sedan",
        model: "Mercedes-Benz E-Class LWB",
        description: "The gold standard for business comfort",
        longDescription: "Experience superior comfort with the Long Wheelbase E-Class. Designed for the executive who values space, it features reclining rear seats and a premium cabin environment.",
        specs: ["3 Passengers", "3 Bags", "Extra Legroom", "Reclining Rear Seats", "Ambient Lighting"],
        price: "₹6,500 - ₹8,500",
        icon: "👔",
    },
    {
        id: "first",
        name: "First Class",
        model: "Mercedes-Benz S-Class",
        description: "Flagship luxury for VIPs",
        longDescription: "The pinnacle of automotive luxury. The S-Class offers an unmatched experience with heated massage seats, Burmester audio, and the finest materials for VIP travel.",
        specs: ["3 Passengers", "3 Bags", "Massage Seats", "Burmester Audio", "First Class Console"],
        price: "₹15,000 - ₹20,000",
        icon: "👑",
    },
    {
        id: "suv",
        name: "Premium SUV",
        model: "Audi Q7 / BMW X7",
        description: "Presence and space for 5 passengers",
        longDescription: "Dominate the road with our Premium SUVs. Offering elevated seating, panoramic views, and Quattro/xDrive stability, these vehicles are perfect for small groups or families.",
        specs: ["5 Passengers", "4 Bags", "Panoramic Roof", "Quattro/xDrive", "Elevated Views"],
        price: "₹9,500 - ₹12,000",
        icon: "🚙",
    },
    {
        id: "mpv",
        name: "Luxury MPV",
        model: "Toyota Vellfire / V-Class",
        description: "Executive lounge on wheels for groups",
        longDescription: "Travel together without compromising on luxury. Features captain seats, conference layout options, and sliding doors for easy access. Ideal for delegations and events.",
        specs: ["6 Passengers", "6 Bags", "Captain Seats", "Conference Layout", "Privacy Glass"],
        price: "₹12,000 - ₹16,000",
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
