"use client";

import { useMemo, useState } from "react";
import { Search, Filter, CheckCircle, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";

// Minimal mock data for demonstration (Assam/Guwahati Pilot)
const MOCK_BOOKINGS = [
    { id: "VD-X7K2P9", date: "2025-01-15", time: "10:30", pickup: "Lokpriya Gopinath Bordoloi Airport", drop: "Vivanta Guwahati, GS Road", vehicle: "Executive Sedan", status: "Confirmed", agentRef: "TRAVELSPACE" },
    { id: "VD-9H2L5M", date: "2025-01-16", time: "14:00", pickup: "Paltan Bazaar", drop: "Dispur Secretariat", vehicle: "Luxury MPV", status: "Pending", agentRef: "CORP202" },
    { id: "VD-3N8V4Q", date: "2025-01-18", time: "09:00", pickup: "Radisson Blu", drop: "Kamakhya Temple", vehicle: "First Class", status: "Confirmed", agentRef: "AGENT001" },
    { id: "VD-5B1C6X", date: "2025-01-20", time: "18:45", pickup: "Guwahati Railway Station", drop: "Khanapara", vehicle: "Premium SUV", status: "Confirmed", agentRef: "TRAVELSPACE" },
    { id: "VD-7J4R2D", date: "2025-01-22", time: "11:15", pickup: "Shillong", drop: "Guwahati Airport (GAU)", vehicle: "Executive Sedan", status: "Pending", agentRef: "" },
];

export function BookingsTable() {
    const [searchTerm, setSearchTerm] = useState("");
    const [allBookings, setAllBookings] = useState(MOCK_BOOKINGS);

    // Initial Load
    useState(() => {
        if (typeof window !== 'undefined') {
            try {
                const local = JSON.parse(localStorage.getItem("vd_bookings") || "[]");
                if (local.length > 0) {
                    setAllBookings(prev => [...local, ...prev]);
                }
            } catch (e) {
                console.error("Failed to load local bookings", e);
            }
        }
    });

    const filteredBookings = useMemo(() => {
        return allBookings.filter(b =>
            b.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            b.agentRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
            b.pickup.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, allBookings]);

    return (
        <div className="space-y-6">
            <div className="flex gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search by ID, Agent Ref, or Location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9"
                    />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground border px-4 rounded-md bg-secondary/10">
                    <Filter className="w-4 h-4" />
                    <span>Showing {filteredBookings.length} bookings</span>
                </div>
            </div>

            <div className="rounded-xl border border-border/50 overflow-hidden bg-card shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-secondary/30 text-muted-foreground font-medium border-b border-border/50">
                            <tr>
                                <th className="px-6 py-4">Booking ID</th>
                                <th className="px-6 py-4">Date & Time</th>
                                <th className="px-6 py-4">Route</th>
                                <th className="px-6 py-4">Vehicle</th>
                                <th className="px-6 py-4">Agent Ref</th>
                                <th className="px-6 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/30">
                            {filteredBookings.map((booking) => (
                                <tr key={booking.id} className="hover:bg-secondary/20 transition-colors">
                                    <td className="px-6 py-4 font-mono font-medium text-primary">
                                        {booking.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div>{booking.date}</div>
                                        <div className="text-muted-foreground text-xs">{booking.time}</div>
                                    </td>
                                    <td className="px-6 py-4 max-w-[200px]">
                                        <div className="font-medium truncate" title={booking.pickup}>{booking.pickup}</div>
                                        <div className="text-muted-foreground text-xs truncate" title={booking.drop}>
                                            to {booking.drop}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {booking.vehicle}
                                    </td>
                                    <td className="px-6 py-4">
                                        {booking.agentRef ? (
                                            <span className="inline-block bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded border border-blue-500/20">
                                                {booking.agentRef}
                                            </span>
                                        ) : (
                                            <span className="text-muted-foreground">-</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        {booking.status === "Confirmed" ? (
                                            <span className="inline-flex items-center gap-1.5 text-green-600 dark:text-green-500 text-xs font-medium bg-green-500/10 px-2.5 py-1 rounded-full">
                                                <CheckCircle className="w-3.5 h-3.5" />
                                                Confirmed
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 text-yellow-600 dark:text-yellow-500 text-xs font-medium bg-yellow-500/10 px-2.5 py-1 rounded-full">
                                                <Clock className="w-3.5 h-3.5" />
                                                Pending
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredBookings.length === 0 && (
                    <div className="p-8 text-center text-muted-foreground">
                        No bookings found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
}
