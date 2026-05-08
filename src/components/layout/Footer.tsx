'use client';

import { MapPin, Phone, Mail } from 'lucide-react';
import Link from "next/link";
import { motion } from 'framer-motion';
import Image from 'next/image';
import {cn} from '@/lib/utils'

const socials = [
    {
        name: 'Facebook',
        icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
        brandColor: '#1877F2',
        hoverBg: 'hover:bg-[#1877F2]'
    },
    {
        name: 'Instagram',
        icon: (
            <>
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </>
        ),
        brandColor: '#E4405F',
        hoverBg: 'hover:bg-[#E4405F]'
    },
    {
        name: 'YouTube',
        icon: (
            <>
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.45 11.75 9.75 8.48 9.75 15.02" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        ),
        brandColor: '#FF0000',
        hoverBg: 'hover:bg-[#FF0000]'
    }
];

export function Footer() {
    return (
        <footer className="pt-20 pb-10 px-4 bg-slate-950 text-slate-400 overflow-hidden relative border-t border-slate-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 lg:gap-24 mb-16">

                    {/* 1. Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block group">
                            <div className="relative w-45 h-16 transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/logo.png"
                                    alt="BIS Logo"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Nurturing future leaders through a holistic approach to education and strong values since 2004.
                        </p>
                        <div className="flex gap-3">
                            {socials.map((social, i) => (
                                <motion.a
                                    whileHover={{ y: -3 }}
                                    key={i}
                                    href="#"
                                    className={cn(
                                        "group w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center transition-all duration-300",
                                        social.hoverBg
                                    )}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor" // Use currentColor here
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ color: social.brandColor }} // Set the initial brand color via style
                                        className="group-hover:!text-white transition-colors duration-300" // Force text-white on hover
                                    >
                                        {social.icon}
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Simplified Navigation */}
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-xs">Explore</h4>
                        <ul className="grid grid-cols-1 gap-3">
                            {[
                                { name: 'About Us', href: '/#about' },
                                { name: 'Academics', href: '/#academics' },
                                { name: 'News & Events', href: '/#news' },
                                { name: 'Contact Us', href: '/contact' },
                                { name: 'Admin Panel', href: '/login' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm font-bold hover:text-white transition-colors inline-block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Direct Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-xs">Contact</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-bis-blue shrink-0 mt-0.5" />
                                <p className="text-xs font-medium leading-tight">J-103 Barra World Bank, Kanpur, UP</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-bis-red shrink-0" />
                                <p className="text-sm font-black text-slate-200">+91 705 272 9388</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-bis-yellow shrink-0" />
                                <p className="text-xs font-medium truncate">brightinternationalschool103@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] opacity-50">
                    <p>© 2026 Bright International School</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Sitemap</a>
                        <a href="#" className="text-bis-blue">Back to top ↑</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}