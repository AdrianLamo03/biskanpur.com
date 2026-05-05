'use client';

import {motion} from 'framer-motion';
import {Quote, Bell, ArrowRight, Calendar, Megaphone, ExternalLink, Phone} from 'lucide-react';
import Image from 'next/image'

export function DirectorNews() {
    const updates = [
        {title: "Summer Vacation Schedule 2026", date: "May 15", type: "Circular"},
        {title: "Annual Science Fair Winners Announced", date: "May 10", type: "News"},
        {title: "Parent-Teacher Meeting (Grades 1-8)", date: "May 08", type: "Event"},
        {title: "New Transport Routes for Civil Lines", date: "May 05", type: "Update"},
    ];

    return (
        <section id="news" className="py-24 px-4 bg-slate-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-stretch">

                    {/* LEFT: Director's Message (The Heart) */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="lg:w-7/12 relative group"
                    >
                        <div
                            className="h-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 overflow-hidden relative">
                            {/* Decorative Big Quote Icon */}
                            <Quote
                                className="absolute -top-6 -right-6 w-32 h-32 text-slate-50 -rotate-12 group-hover:text-bis-blue/5 transition-colors duration-500"/>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex flex-col items-center">
                                        <div
                                            className=" relative w-85 h-55 rounded-2xl bg-bis-blue overflow-hidden border-4 border-bis-blue/10 mb-8">
                                            <Image
                                                src="/director.png"
                                                alt="Director Nitin"
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                priority
                                            />
                                            <div>
                                                <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Mr.
                                                    Nitin Singh</h3>
                                                <p className="text-bis-blue font-bold text-sm uppercase tracking-widest">School
                                                    Director</p>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <h2 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight uppercase">
                                                Inspiring excellence <br/>
                                                <span className="text-bis-red">since day one.</span>
                                            </h2>
                                            <p className="text-slate-600 text-lg leading-relaxed italic font-medium">
                                                &#34;At Bright International, we don&#39;t just teach subjects; we
                                                ignite
                                                minds. Our mission is to create a safe haven where every child feels
                                                empowered to ask &#39;Why?&#39; and &#39;How?&#39;. We are building the
                                                leaders of 2040, starting today.&#34;
                                            </p>
                                            <button
                                                className="flex items-center gap-2 text-bis-blue font-black uppercase text-sm group/btn">
                                                Read Full Message <ArrowRight
                                                className="group-hover/btn:translate-x-2 transition-transform"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Contact Glass Strip */}
                                <div
                                    className="mt-12 p-4 bg-bis-blue/5 rounded-2xl border border-bis-blue/10 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                            <Phone size={18} className="text-bis-blue"/>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase">Direct
                                                line</p>
                                            <p className="text-sm font-bold text-slate-700">+91 705 272 9388</p>
                                        </div>
                                    </div>
                                    <button
                                        className="bg-white px-4 py-2 rounded-xl text-[10px] font-black uppercase shadow-sm hover:bg-bis-blue hover:text-white transition-all">
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: News & Updates (The Pulse) */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: 0.2}}
                        className="lg:w-5/12"
                    >
                        <div
                            className="bg-bis-yellow/20 rounded-3xl p-8 h-full shadow-2xl shadow-bis-red/20 flex flex-col ">
                            <div className="flex items-center justify-between mb-8 text-black">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                                        <Bell className="animate-bounce"/>
                                    </div>
                                    <h3 className="text-xl font-black uppercase tracking-tight">Notice Board</h3>
                                </div>
                                <button
                                    className="text-[10px] font-black uppercase border-b-2 border-white/40 hover:border-white transition-all">View
                                    All
                                </button>
                            </div>

                            <div className="space-y-4 grow">
                                {updates.map((update, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{x: 10}}
                                        className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-2xl flex items-center gap-4 cursor-pointer group"
                                    >
                                        <div
                                            className="w-12 h-12 bg-white rounded-xl flex flex-col items-center justify-center text-bis-red shrink-0">
                                            <span
                                                className="text-[10px] font-black leading-none uppercase">{update.date.split(' ')[0]}</span>
                                            <span
                                                className="text-lg font-black leading-none">{update.date.split(' ')[1]}</span>
                                        </div>
                                        <div className="grow">
                                            <p className="text-[10px] font-black text-bis-blue uppercase mb-1 tracking-widest">{update.type}</p>
                                            <h4 className="text-sm font-bold text-black group-hover:text-bis-yellow transition-colors">{update.title}</h4>
                                        </div>
                                        <ExternalLink size={16} className="text-white/40 group-hover:text-white"/>
                                    </motion.div>
                                ))}
                            </div>

                            <div
                                className="mt-8 p-6 bg-black/40 rounded-[2rem] border border-white/20 backdrop-blur-2xl">
                                <div className="flex items-center gap-4">
                                    <Megaphone className="text-bis-yellow"/>
                                    <div>
                                        <p className="text-bis-red font-bold text-sm uppercase">Quick Alert</p>
                                        <p className="text-white text-xs">Admissions are filling fast for the 2026
                                            session. Check eligibility today!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}