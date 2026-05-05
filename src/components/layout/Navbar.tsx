'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Add this
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket, GraduationCap, Users, Calendar, Phone, } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from "next/link";
import Image from "next/image";

// Keep your navLinks as they are
const navLinks = [
    { name: 'About Us', href: '#about', icon: Users, color:'hover:text-bis-red hover:bg-bis-red/10' },
    { name: 'Academics', href: '#academics', icon: GraduationCap, color: 'hover:text-bis-blue hover:bg-bis-blue/10' },
    { name: 'News & Events', href: '#news', icon: Calendar, color: 'hover:text-green-500 hover:bg-green-500/10' },
    { name: 'Contact', href: '/contact', icon: Phone, color: 'hover:text-purple-500 hover:bg-purple-500/10' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname(); // Get the current path (e.g., "/" or "/contact")

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper function to determine the correct link path
    const getHref = (href: string) => {
        // If it's already a full path like '/contact', return it
        if (href.startsWith('/')) return href;

        // If we are NOT on the homepage, prefix hash links with /
        // This turns "#about" into "/#about"
        return pathname === '/' ? href : `/${href}`;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-4 md:py-4">
            <div
                className={cn(
                    "max-w-7xl mx-auto flex items-center justify-between px-2 md:px-4 py-3 transition-all duration-300 rounded-2xl md:rounded-[2.5rem] border border-white/40 shadow-xl",
                    scrolled
                        ? "bg-white/80 backdrop-blur-xl shadow-bis-blue/5"
                        : "bg-white/30 backdrop-blur-md"
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-[180px] h-16 transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            sizes="180px"
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={getHref(link.href)} // Use the helper function here
                            className={cn(
                                "px-3 xl:px-4 py-2 rounded-full text-slate-700 font-bold text-sm transition-all duration-200 flex items-center gap-2",
                                link.color,
                                // Add active state styling if on the specific page
                                pathname === link.href ? "bg-slate-100 text-bis-blue" : ""
                            )}
                        >
                            <link.icon size={16} className="opacity-70" />
                            {link.name}
                        </Link>
                    ))}

                    
                    <Link
                        href={getHref('/contact')} // Use helper here too
                        className="ml-2 xl:ml-4 px-6 py-2.5 bg-brand-green text-white rounded-full font-black text-sm uppercase tracking-wider hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                    >
                        Apply <Rocket size={16} />
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button className="lg:hidden p-2 text-slate-800" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl p-4 shadow-2xl border border-white/50 flex flex-col gap-1 lg:hidden">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={getHref(link.href)} // Use helper here
                                className={cn("flex items-center gap-4 text-base font-bold text-slate-700 p-4 rounded-2xl", link.color)}
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                                    <link.icon size={20} className="text-bis-blue" />
                                </div>
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href={getHref('#apply')}
                            className="mt-2 w-full py-4 bg-bis-blue text-white text-center rounded-2xl font-black text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Start Admission
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}