"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/90 backdrop-blur-md shadow-md py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container px-4 md:px-8 mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-serif font-bold text-primary tracking-wide">
                    VELVET<span className="text-foreground">DRIVE</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {["Fleet", "Services", "Corporate", "About"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link href="/book">
                        <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Book Now
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border p-4 flex flex-col gap-4 shadow-xl">
                    {["Fleet", "Services", "Corporate", "About"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="text-lg font-medium text-foreground hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link href="/book" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full bg-primary text-primary-foreground">Book Now</Button>
                    </Link>
                </div>
            )}
        </header>
    );
}
