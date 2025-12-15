"use client";

import { Navbar } from "@/components/layout/Navbar";
import { BookingWizard } from "@/components/booking/BookingWizard";

export default function BookPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <BookingWizard />
        </main>
    );
}
