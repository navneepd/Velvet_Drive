import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Briefcase, TrendingUp, Shield, Clock, Users, BarChart3 } from "lucide-react";
import Link from "next/link";

const benefits = [
    {
        icon: Briefcase,
        title: "Executive Profiles",
        description: "Dedicated vehicle allocations for your top executives and clients",
    },
    {
        icon: TrendingUp,
        title: "Flexible Billing",
        description: "Customized invoicing, monthly statements, and expense reporting",
    },
    {
        icon: Shield,
        title: "Reliability Guaranteed",
        description: "Priority booking with guaranteed vehicle availability",
    },
    {
        icon: Clock,
        title: "24/7 Availability",
        description: "Round-the-clock service for all your business travel needs",
    },
    {
        icon: Users,
        title: "Dedicated Account Manager",
        description: "Personal point of contact for seamless coordination",
    },
    {
        icon: BarChart3,
        title: "Analytics & Reporting",
        description: "Detailed trip reports and expenditure tracking",
    },
];

export default function CorporatePage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Header */}
            <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
                        Corporate <span className="text-primary">Accounts</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Premium transportation solutions for businesses and executives who demand excellence.
                    </p>
                </div>
            </section>

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-card rounded-2xl border border-border/50 p-12">
                        <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                            Elevate Your Business Travel
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            At Velvet Drive, we understand that corporate travel reflects your company's image. Our corporate accounts are designed to provide executives, employees, and valued clients with world-class transportation that reinforces professionalism and luxury.
                        </p>
                        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                            From client entertainment to employee shuttles, airport transfers to conference transportation—we handle every detail with precision and discretion.
                        </p>

                        <Link href="mailto:corporate@velvetdrive.com">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                                Open a Corporate Account
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 px-4 bg-secondary/10">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
                        Corporate Benefits
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-8 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 mb-6">
                                        <IconComponent className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
                        Flexible Pricing Plans
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Starter Plan */}
                        <div className="p-8 bg-card rounded-xl border border-border/50">
                            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Starter</h3>
                            <p className="text-primary font-semibold text-lg mb-6">Perfect for growing companies</p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                                    <span className="text-foreground/80">Up to 10 monthly trips</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                                    <span className="text-foreground/80">All vehicle classes</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                                    <span className="text-foreground/80">Monthly invoicing</span>
                                </li>
                            </ul>

                            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                Get Started
                            </Button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="p-8 bg-card rounded-xl border-2 border-primary/50 relative">
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-lg text-sm font-semibold">
                                Most Popular
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Enterprise</h3>
                            <p className="text-primary font-semibold text-lg mb-6">For large organizations</p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                                    <span className="text-foreground/80">Unlimited trips</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                                    <span className="text-foreground/80">Priority booking & support</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                                    <span className="text-foreground/80">Dedicated account manager</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                                    <span className="text-foreground/80">Analytics & reporting</span>
                                </li>
                            </ul>

                            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-r from-primary/20 via-background to-primary/20">
                <div className="container mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                        Ready to Upgrade Your Corporate Travel?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10">
                        Contact our corporate team to discuss a customized solution for your organization.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="mailto:corporate@velvetdrive.com">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                                Email: corporate@velvetdrive.com
                            </Button>
                        </Link>
                        <Link href="tel:+1-555-123-4567">
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                                Call: +1 (555) 123-4567
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
