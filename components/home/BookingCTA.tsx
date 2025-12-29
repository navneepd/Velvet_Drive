"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function BookingCTA() {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-primary/20 via-background to-primary/20 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Ready to Experience <span className="text-primary">Excellence?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                        Your journey to premium chauffeur services starts here. Book your ride in seconds and discover the difference luxury travel makes.
                    </p>

                    <Link href="/book">
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-lg font-semibold flex items-center gap-2 mx-auto group"
                        >
                            Book Your Journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>

                    {/* Trust indicators */}
                    <div className="mt-16 pt-12 border-t border-border/30 flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-muted-foreground">
                        <div className="flex flex-col items-center gap-2">
                            <div className="text-2xl font-bold text-primary">1000+</div>
                            <p>Happy Clients</p>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-border/50"></div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="text-2xl font-bold text-primary">24/7</div>
                            <p>Available Service</p>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-border/50"></div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="text-2xl font-bold text-primary">5★</div>
                            <p>Excellence</p>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-border/50"></div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="text-2xl font-bold text-primary">100%</div>
                            <p>Verified Fleet</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
