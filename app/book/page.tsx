import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { BookingForm } from "@/components/booking/BookingForm";

function BookingLoadingFallback() {
    return (
        <div className="min-h-screen bg-background text-foreground py-20 px-4">
            <div className="container mx-auto max-w-2xl">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                    <p className="text-lg text-muted-foreground">Loading your booking form...</p>
                </div>
            </div>
        </div>
    );
}

export default function BookPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <Suspense fallback={<BookingLoadingFallback />}>
                <BookingForm />
            </Suspense>
        </main>
    );
}
