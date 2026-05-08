'use client';

import { motion } from 'framer-motion';
import {
    Users,
    Megaphone,
    Calendar,
    ArrowUpRight,
    Clock,
    GraduationCap,
    Briefcase,
    ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardClient({ stats, recentInquiries }: any) {
    const statCards = [
        { label: 'Pending Inquiries', value: stats.pendingInquiries, color: 'bg-bis-yellow', textColor: 'text-slate-900', icon: Users, link: '/admin/inbox' },
        { label: 'Active Notices', value: stats.totalNotices, color: 'bg-bis-blue', textColor: 'text-white', icon: Megaphone, link: '/admin/notices' },
        { label: 'Key Dates', value: stats.totalDates, color: 'bg-slate-900', textColor: 'text-white', icon: Calendar, link: '/admin/notices' },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            {/* STATS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {statCards.map((stat, i) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        key={stat.label}
                        className={`${stat.color} ${stat.textColor} p-8 rounded-[2.5rem] relative overflow-hidden group h-55 flex flex-col justify-between border border-black/5 shadow-sm`}
                    >
                        {/* ICON LAYER - Pushed to back and constrained */}
                        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110 pointer-events-none">
                            <stat.icon size={80} strokeWidth={1.5} />
                        </div>

                        {/* CONTENT LAYER */}
                        <div className="relative z-10">
                            <p className="text-[10px] font-black uppercase tracking-[0.25em] opacity-60 mb-2">
                                {stat.label}
                            </p>
                            <h3 className="text-6xl font-black tracking-tighter">
                                {stat.value}
                            </h3>
                        </div>

                        <div className="relative z-10">
                            <Link
                                href={stat.link}
                                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-black/5 hover:bg-black/10 py-2.5 px-5 rounded-xl transition-all"
                            >
                                Manage Items <ChevronRight size={14} />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* RECENT INQUIRIES */}
                <section className="lg:col-span-2 bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
                    <div className="flex justify-between items-center mb-8 px-2">
                        <h3 className="text-xl font-black uppercase tracking-tight text-slate-800">Recent Activity</h3>
                        <Link href="/admin/inbox" className="text-bis-blue font-black text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity">Full Inbox</Link>
                    </div>

                    <div className="space-y-3">
                        {recentInquiries.length > 0 ? recentInquiries.map((iq: any) => (
                            <div key={iq.id} className="flex items-center justify-between p-5 bg-slate-50 hover:bg-white hover:shadow-md hover:border-slate-200 border border-transparent rounded-[2rem] transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${iq.type === 'ADMISSION' ? 'bg-bis-blue/10 text-bis-blue' : 'bg-purple-100 text-purple-600'}`}>
                                        {iq.type === 'ADMISSION' ? <GraduationCap size={20} /> : <Briefcase size={20} />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">{iq.name}</h4>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                                            {iq.type} <span className="mx-1">•</span> {iq.status}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold text-slate-300 tabular-nums">{new Date(iq.createdAt).toLocaleDateString()}</span>
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-300 shadow-sm">
                                        <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="py-12 text-center">
                                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest opacity-50">Inbox is empty</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* SIDEBAR */}
                <div className="space-y-6">
                    <section className="bg-bis-red text-white p-8 rounded-3xl shadow-xl shadow-bis-red/10 overflow-hidden relative">
                        <div className="relative z-10">
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-6 text-center">Inquiry Distribution</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 p-5 rounded-[2rem] text-center backdrop-blur-sm border border-white/5">
                                    <span className="block text-3xl font-black leading-none mb-2">{stats.admissionTotal}</span>
                                    <span className="text-[8px] font-black uppercase opacity-60 tracking-widest">Admissions</span>
                                </div>
                                <div className="bg-white/10 p-5 rounded-[2rem] text-center backdrop-blur-sm border border-white/5">
                                    <span className="block text-3xl font-black leading-none mb-2">{stats.vacancyTotal}</span>
                                    <span className="text-[8px] font-black uppercase opacity-60 tracking-widest">Vacancies</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-slate-900 p-8 rounded-3xl text-white flex gap-4 items-center">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                            <Clock className="text-bis-yellow" size={20} />
                        </div>
                        <p className="text-[10px] font-bold leading-relaxed uppercase tracking-tighter opacity-80">
                            Ensure all <span className="text-bis-yellow">Pending</span> inquiries are contacted within 24 hours.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}