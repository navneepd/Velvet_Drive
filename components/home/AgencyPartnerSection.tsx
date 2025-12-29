"use client";

import { Button } from "@/components/ui/button";
import { Building2, ShieldCheck, CreditCard, HeadphonesIcon } from "lucide-react";
import Link from "next/link";

export function AgencyPartnerSection() {
    return (
        <section className="py-20 bg-card border-t border-border/40">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Content */}
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide border border-primary/20">
                            <Building2 className="w-3 h-3" />
                            FOR AGENCIES & CORPORATE
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                            Partner with <span className="text-primary">Velvet Drive</span>
                        </h2>
                        
                        <p className="text-muted-foreground text-lg max-w-xl">
                            Elevate your clients' experience with our premium chauffeur services. 
                            We offer dedicated accounts for travel agencies, event planners, and corporate partners.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex gap-3">
                                <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                                    <CreditCard className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Commissionable Rates</h3>
                                    <p className="text-sm text-muted-foreground">Competitive commissions on all bookings.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-3">
                                <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                                    <ShieldCheck className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">White-Glove Service</h3>
                                    <p className="text-sm text-muted-foreground">Discreet, professional, and reliable.</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                                    <HeadphonesIcon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Dedicated Support</h3>
                                    <p className="text-sm text-muted-foreground">24/7 priority line for partners.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button variant="outline" className="border-primary/20 hover:bg-primary/5 text-foreground">
                                Apply for Partner Account
                            </Button>
                        </div>
                    </div>

                    {/* Visual/Image Area */}
                    <div className="flex-1 w-full relative">
                        <div className="relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-secondary border border-border/50 shadow-2xl">
                             {/* Abstract representation of a dashboard or handshake */}
                             <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-primary/5">
                                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                    <Building2 className="w-32 h-32" />
                                </div>
                             </div>
                             <div className="absolute bottom-6 left-6 right-6 p-6 bg-card/90 backdrop-blur-md rounded-xl border border-border/50 shadow-lg">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">Priority Status</p>
                                        <p className="text-xs text-muted-foreground">Verified Partner</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-primary rounded-full"></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                        <span>Monthly Volume</span>
                                        <span>Top Tier</span>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
