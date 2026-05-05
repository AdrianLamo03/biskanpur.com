'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {Plus, Minus, HelpCircle, Sparkles, ArrowRight} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from "next/link";

// 1. Define exactly what a FAQ looks like
interface FAQItem {
    question: string;
    answer: string;
}

const faqs= [
    {
        question: "What are the school timings for BIS?",
        answer: "Our school operates from 8:30 AM to 2:30 PM for Primary & Middle grades. For Playgroup and Nursery, timings are shorter, from 9:00 AM to 12:30 PM."
    },
    {
        question: "Is transport facility available?",
        answer: "Yes, we provide safe and GPS-tracked bus transportation covering most major routes in the city. Each bus is accompanied by a female attendant."
    },
    {
        question: "What is the student-teacher ratio?",
        answer: "We maintain a low ratio of 15:1 for early years and 25:1 for primary grades to ensure every child receives personalized attention from our educators."
    },
    {
        question: "Do you offer extracurricular activities?",
        answer: "Absolutely! We have dedicated clubs for Music, Dance, Karate, Robotics, and Public Speaking that take place during and after school hours."
    }
];

export function FAQAndContact() {
    // 2. Explicitly tell the state it holds a number (index) or null
    const [activeIdx, setActiveIdx] = useState<number | null>(0);

    return (
        <section id="contact" className="py-24 px-4 bg-white relative">
            <div className="max-w-4xl mx-auto">

                {/* FAQ Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1 bg-bis-blue/10 text-bis-blue rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                        <HelpCircle size={14}/> Common Inquiries
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-800 uppercase tracking-tighter">
                        Frequently Asked <span className="text-bis-blue">Questions</span>
                    </h2>
                </div>

                {/* Accordion List */}
                <div className="space-y-4 mb-24">
                    {faqs.map((faq: FAQItem, i: number) => ( // 3. Strictly type the map arguments
                        <div
                            key={i}
                            className={cn(
                                "rounded-[2rem] border transition-all duration-300",
                                activeIdx === i ? "bg-slate-50 border-bis-blue/20 shadow-lg" : "bg-white border-slate-100"
                            )}
                        >
                            <button
                                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                            >
                <span className="text-lg md:text-xl font-black text-slate-800 uppercase tracking-tight">
                  {faq.question}
                </span>
                                <div className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                                    activeIdx === i ? "bg-bis-blue text-white" : "bg-slate-100 text-slate-400"
                                )}>
                                    {activeIdx === i ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIdx === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                    >
                                        <div className="px-8 pb-8 text-slate-500 font-medium italic">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* --- CALL ONLY CTA --- */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-bis-blue rounded-[3.5rem] p-10 md:p-20 text-center text-white shadow-2xl shadow-bis-blue/30 overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-bis-yellow/20 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-bis-red/20 rounded-full blur-3xl" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-white/10">
                            <Sparkles size={14} className="text-bis-yellow" />
                            <span>Admissions & Recruitment 2026</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">
                            Begin Your <br /><span className="text-bis-yellow">Journey</span> With Us
                        </h2>

                        <p className="text-white/80 text-lg md:text-xl mb-12 font-medium leading-relaxed italic">
                            &#34;Whether you are a parent seeking the best for your child or a professional
                            looking to shape the future of education, we want to hear from you.&#34;
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link
                                href="/contact"
                                className="group px-10 py-5 bg-bis-yellow text-slate-900 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
                            >
                                Contact us
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>

                        <div className="mt-10 grid grid-cols-2 md:grid-cols-2 gap-4 max-w-sm mx-auto">
                            <div className="text-center p-3 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-bis-yellow font-black text-xl leading-none">8:1</p>
                                <p className="text-[9px] uppercase tracking-widest mt-1 opacity-60">Staff Ratio</p>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-bis-yellow font-black text-xl leading-none">100%</p>
                                <p className="text-[9px] uppercase tracking-widest mt-1 opacity-60">Safe Campus</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}