"use client";

import { Navbar } from "@/components/layout/Navbar";
import { BookingsTable } from "@/components/agency/BookingsTable";

export default function AgencyBookingsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="container mx-auto px-4 py-20">
                <div className="mb-8">
                    <h1 className="text-3xl font-serif font-bold text-foreground">
                        Agency <span className="text-primary">Dashboard</span>
                    </h1>
                    <p className="text-muted-foreground">
                        View and manage your agency bookings.
                    </p>
                </div>

                <BookingsTable />
            </div>
        </main>
    );
}
