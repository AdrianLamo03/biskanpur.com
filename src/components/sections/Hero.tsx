'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Sun, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from "next/link";
import Image from 'next/image';

const sliderImages = [
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071",
    "https://images.unsplash.com/photo-1523050335392-93851179ae22?q=80&w=2070",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104",
];

export function Hero() {
    const [current, setCurrent] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    const nextSlide = () => setCurrent((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));

    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden px-4 min-h-[90vh] flex items-center">

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full -z-20 bg-[#f8fafc]"/>
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-bis-blue/10 rounded-full blur-[120px] -z-10"/>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-bis-red/10 rounded-full blur-[120px] -z-10"/>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md text-bis-blue rounded-full font-black text-xs uppercase tracking-widest mb-6 border border-white/50 shadow-sm">
                            <Sparkles size={16}/>
                            <span>Excellence in Education Since 2004</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 text-slate-800 uppercase tracking-tighter">
                            Where Learning <br/>
                            <span className="text-bis-blue relative">
                                is an Adventure
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-bis-yellow/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4"/>
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
                            Bright International School (BIS) provides a nurturing environment where
                            curiosity meets world-class academics.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link href="/contact" className="px-8 py-4 bg-brand-green text-white rounded-2xl font-black text-lg flex items-center gap-2 hover:shadow-xl hover:shadow-bis-red/30 transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-wide">
                                Enroll Your Child <ArrowRight size={20}/>
                            </Link>

                            <Link href="/gallery" className="px-8 py-4 bg-white/40 backdrop-blur-md text-slate-700 border border-white/60 rounded-2xl font-black text-lg hover:bg-white/80 transition-all active:scale-95 uppercase tracking-wide inline-block">
                                Virtual Tour
                            </Link>
                        </div>

                    </motion.div>

                    {/* Right Visual: Slideshow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative w-full aspect-[4/5] md:aspect-square lg:h-[600px] group"
                    >
                        {/* Main Slide Container */}
                        <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl bg-white">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={sliderImages[current]}
                                        alt="School Life"
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Arrow Navigation */}
                            <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={prevSlide}
                                    className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 shadow-xl hover:bg-bis-red hover:text-white transition-all"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 shadow-xl hover:bg-bis-red hover:text-white transition-all"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>

                            {/* Status Overlay */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/50 max-w-[240px]">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"/>
                                        <p className="text-[10px] font-black uppercase text-bis-blue tracking-tighter">Current Status</p>
                                    </div>
                                    <h3 className="text-base font-black text-slate-800 leading-tight">Admissions Open For 2026</h3>
                                </div>
                            </div>
                        </div>

                        {/* Floating Sun Decor */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-10 -right-10 text-bis-yellow/30 -z-10"
                        >
                            <Sun size={160} />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}