import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Header */}
            <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
                        About <span className="text-primary">Velvet Drive</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Redefining luxury travel through commitment, professionalism, and excellence.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-8">Our Story</h2>

                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            Velvet Drive was founded on a simple belief: premium transportation should be the standard, not the exception. We recognized a gap in the market where discerning travelers and business professionals deserved more than just a ride—they deserved an experience.
                        </p>

                        <p>
                            From our humble beginnings with a single vehicle and a vision for excellence, we've grown into a trusted name in luxury chauffeur services. Today, we serve hundreds of satisfied clients, from individual travelers to multinational corporations, and we remain committed to the principles that got us here.
                        </p>

                        <p>
                            Every interaction, every journey, every moment with Velvet Drive is designed with you in mind. We don't just transport passengers—we create moments of comfort, reliability, and refined elegance in every trip.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 px-4 bg-secondary/10">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
                        Our Core Values
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Luxury */}
                        <div className="p-8 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
                            <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 mb-6">
                                <Heart className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Luxury</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We believe in providing an uncompromising premium experience. From our meticulously maintained vehicles to our professionally trained chauffeurs, every detail reflects our commitment to luxury and refinement.
                            </p>
                        </div>

                        {/* Safety */}
                        <div className="p-8 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
                            <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 mb-6">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Safety</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Your safety is paramount. All our vehicles undergo rigorous safety inspections, our drivers have extensive background checks, and we maintain comprehensive insurance coverage to ensure your peace of mind.
                            </p>
                        </div>

                        {/* Punctuality */}
                        <div className="p-8 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
                            <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 mb-6">
                                <Zap className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Punctuality</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Time is precious. We arrive on time, every time. Our advanced routing and real-time traffic monitoring ensure you're never late to what matters most.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* By The Numbers */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
                        Why We're Different
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-2">1000+</div>
                            <p className="text-lg text-muted-foreground">Happy Clients</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-2">10+</div>
                            <p className="text-lg text-muted-foreground">Years of Excellence</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-2">98%</div>
                            <p className="text-lg text-muted-foreground">On-Time Rate</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-2">5★</div>
                            <p className="text-lg text-muted-foreground">Average Rating</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-card rounded-2xl border border-border/50 p-12">
                        <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                            Our Commitment to You
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            We're committed to continuous improvement. Every feedback is valued, every suggestion is considered, and every interaction is an opportunity to exceed expectations.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Whether you're catching a flight, attending a board meeting, or celebrating a special occasion, we're here to ensure your journey is nothing short of exceptional.
                        </p>

                        <Link href="/book">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                                Experience Velvet Drive Today
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10">
                        Have questions? Our team is here to help. Contact us for more information about our services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="mailto:info@velvetdrive.com">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                                Email Us
                            </Button>
                        </Link>
                        <Link href="tel:+1-555-123-4567">
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                                Call Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
