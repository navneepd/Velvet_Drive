import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Fleet } from "@/components/home/Fleet";
import { Services } from "@/components/home/Services";
import { BookingCTA } from "@/components/home/BookingCTA";
import { AgencyPartnerSection } from "@/components/home/AgencyPartnerSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <Hero />
            <Fleet />
            <Services />
            <AgencyPartnerSection />
            <BookingCTA />
        </main>
    );
}
