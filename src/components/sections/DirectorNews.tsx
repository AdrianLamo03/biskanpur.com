import prisma from "@/lib/prisma";
import { Quote, Bell, ArrowRight, Megaphone, ExternalLink, Phone } from 'lucide-react';
import Image from 'next/image';
import { NoticeCard } from "./NoticeCard"; // We'll move the animated card here
import Link from "next/link";

export async function DirectorNews() {
    // 1. Fetch live notices from the database
    const notices = await prisma.notice.findMany({
        orderBy: { createdAt: 'desc' },
        take: 4 // Only show the latest 4 to keep the layout clean
    });

    // 2. Fetch marquee text for the Quick Alert
    const settings = await prisma.siteSettings.findUnique({
        where: { id: 'global' }
    });

    return (
        <section id="news" className="py-24 px-4 bg-slate-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-stretch">

                    {/* LEFT: Director's Message */}
                    <div className="lg:w-7/12 relative group">
                        <div className="h-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 overflow-hidden relative">
                            <Quote className="absolute -top-6 -right-6 w-32 h-32 text-slate-50 -rotate-12 group-hover:text-bis-blue/5 transition-colors duration-500"/>

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row gap-8 mb-8 items-start">
                                    <div className="relative w-40 h-48 shrink-0 rounded-2xl bg-bis-blue overflow-hidden border-4 border-bis-blue/10">
                                        <Image
                                            src="/director.png"
                                            alt="Director Nitin"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight uppercase">
                                            Inspiring excellence <br/>
                                            <span className="text-bis-red">since day one.</span>
                                        </h2>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Mr. Nitin Singh</h3>
                                            <p className="text-bis-blue font-bold text-sm uppercase tracking-widest">School Director</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-600 text-lg leading-relaxed italic font-medium mb-8">
                                    &#34;At Bright International, we don&#39;t just teach subjects; we ignite minds. Our mission is to create a safe haven where every child feels empowered to ask &#39;Why?&#39; and &#39;How?&#39;. We are building the leaders of 2040, starting today.&#34;
                                </p>

                                <div className="mt-12 p-4 bg-bis-blue/5 rounded-2xl border border-bis-blue/10 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-bis-blue"><Phone size={18}/></div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase">Direct line</p>
                                            <p className="text-sm font-bold text-slate-700">+91 705 272 9388</p>
                                        </div>
                                    </div>
                                    <button className="bg-white px-4 py-2 rounded-xl text-[10px] font-black uppercase shadow-sm hover:bg-bis-blue hover:text-white transition-all">
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: News & Updates (Notice Board) */}
                    <div className="lg:w-5/12">
                        <div className="bg-slate-900 rounded-3xl p-8 h-full shadow-2xl flex flex-col border border-white/5">
                            <div className="flex items-center justify-between mb-8 text-white">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-white/10 rounded-2xl">
                                        <Bell className="text-bis-yellow animate-pulse" size={24}/>
                                    </div>
                                    <h3 className="text-xl font-black uppercase tracking-tight">Notice Board</h3>
                                </div>
                                <span className="text-[10px] font-black uppercase text-white/40">Latest Updates</span>
                            </div>

                            <div className="space-y-4 grow">
                                {notices.length > 0 ? notices.map((notice) => (
                                    <NoticeCard key={notice.id} notice={notice} />
                                )) : (
                                    <p className="text-white/20 italic text-center py-10">No active notices.</p>
                                )}
                            </div>

                            {/* Bottom Alert Area (Connected to Settings) */}
                            <div className="mt-8 p-6 bg-bis-red rounded-[2rem] border border-white/10 shadow-lg relative overflow-hidden group">
                                <Megaphone className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                                        <Megaphone className="text-white" size={20}/>
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-[10px] uppercase tracking-widest opacity-80">Announcements</p>
                                        <p className="text-white text-xs font-bold leading-snug uppercase tracking-tight">
                                            {settings?.marqueeText || "Admissions open for 2026 session."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}