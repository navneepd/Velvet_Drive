import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Plane, Clock, Sparkles, MapPin, Shield, Headphones } from "lucide-react";
import Link from "next/link";

const primaryServices = [
    {
        icon: Plane,
        title: "Airport Transfers",
        description: "Seamless pickups and drop-offs with real-time flight tracking",
        longDescription: "Never worry about airport transportation again. We monitor your flight in real-time and adjust pickup times automatically. Complimentary phone/email notifications keep you informed every step of the way.",
        features: ["Real-time Flight Tracking", "Flexible Pickup Times", "Luggage Assistance", "Premium Pick-up Lounge"],
    },
    {
        icon: Clock,
        title: "Hourly Service",
        description: "Flexible travel solutions for your busy schedule",
        longDescription: "Book by the hour for maximum flexibility. Perfect for shopping trips, sightseeing tours, business appointments, or any journey where you need a chauffeur on your schedule.",
        features: ["Flexible Duration", "Custom Routes", "Wait Time Included", "Professional Chauffeurs"],
    },
    {
        icon: Sparkles,
        title: "Event Transport",
        description: "Elevate your special occasions with professional chauffeur services",
        longDescription: "From weddings to corporate galas, proms to anniversaries—we provide premium transportation that matches the elegance of your event. Our chauffeurs are trained in discretion and professionalism.",
        features: ["Event Coordination", "Multiple Vehicle Options", "Punctuality Guaranteed", "Professional Appearance"],
    },
];

const additionalServices = [
    {
        icon: MapPin,
        title: "Corporate Travel",
        description: "Dedicated accounts for businesses and executives",
    },
    {
        icon: Shield,
        title: "Safe & Secure",
        description: "Verified drivers with background checks and insurance",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Round-the-clock customer service for your peace of mind",
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Header */}
            <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
                        Our <span className="text-primary">Services</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Tailored transportation solutions designed for every occasion and every need.
                    </p>
                </div>
            </section>

            {/* Primary Services */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl space-y-12">
                    {primaryServices.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                            >
                                {/* Icon & Content */}
                                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 border border-primary/20">
                                                <IconComponent className="w-8 h-8 text-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-serif font-bold text-foreground mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-primary font-semibold">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                        {service.longDescription}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-3 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                <span className="text-foreground/80">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href="/book">
                                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                            Book {service.title}
                                        </Button>
                                    </Link>
                                </div>

                                {/* Image Placeholder */}
                                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                                    <div className="h-80 bg-gradient-to-br from-secondary to-background rounded-xl flex items-center justify-center border border-border/50">
                                        <div className="text-center">
                                            <div className="text-8xl mb-4 opacity-50">
                                                {typeof service.icon === 'function' ? '✨' : '✨'}
                                            </div>
                                            <p className="text-muted-foreground text-lg font-semibold">
                                                {service.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Additional Services Grid */}
            <section className="py-20 px-4 bg-secondary/10">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
                        Why Choose Us?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {additionalServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-8 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 mb-6">
                                        <IconComponent className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                        Experience Premium Service Today
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Ready to discover the difference that professional chauffeur services can make?
                    </p>
                    <Link href="/book">
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                            Book a Service
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
