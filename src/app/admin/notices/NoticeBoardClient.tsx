'use client';

import { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, X, Calendar, ChevronDown, Loader2 } from 'lucide-react';
import { addNotice, deleteNotice, addKeyDate, deleteKeyDate } from '@/app/actions/notices';

export default function NoticeBoardClient({ initialNotices, initialKeyDates }: any) {
    const [isPending, startTransition] = useTransition();
    const [showNoticeForm, setShowNoticeForm] = useState(false);
    const [showDateForm, setShowDateForm] = useState(false);
    const [expandedNotice, setExpandedNotice] = useState<string | null>(null);

    return (
        <div className="max-w-6xl mx-auto pb-24 space-y-16">

            {/* SECTION 1: NOTICES */}
            <section>
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-800">Notice Board</h2>
                        <p className="text-slate-500 text-sm font-medium">Manage the cards appearing in &#34;The Pulse&#34; section.</p>
                    </div>
                    <button
                        onClick={() => setShowNoticeForm(!showNoticeForm)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${showNoticeForm ? 'bg-slate-200 text-slate-600' : 'bg-bis-blue text-white shadow-lg shadow-bis-blue/20'}`}
                    >
                        {showNoticeForm ? <X size={16} /> : <Plus size={16} />}
                        {showNoticeForm ? 'Cancel' : 'New Notice'}
                    </button>
                </div>

                {/* Expandable Add Form */}
                <AnimatePresence>
                    {showNoticeForm && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mb-8"
                        >
                            <form action={async (fd) => {
                                startTransition(async () => {
                                    await addNotice(fd);
                                    setShowNoticeForm(false);
                                });
                            }} className="bg-white border-2 border-bis-blue/20 p-8 rounded-[2.5rem] grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase ml-2 text-slate-400">Date (e.g. MAY 25)</label>
                                    <input name="date" required className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-bis-blue transition-all" placeholder="MAY 25" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase ml-2 text-slate-400">Category</label>
                                    <input name="type" required className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-bis-blue transition-all" placeholder="Holiday / Event" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase ml-2 text-slate-400">Title</label>
                                    <input name="title" required className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-bis-blue transition-all" placeholder="Summer Vacation" />
                                </div>
                                <div className="md:col-span-3 space-y-1">
                                    <label className="text-[10px] font-bold uppercase ml-2 text-slate-400">Detailed Description</label>
                                    <textarea name="description" rows={3} className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-bis-blue transition-all" placeholder="Enter full details here..." />
                                </div>
                                <div className="md:col-span-3 flex justify-end">
                                    <button disabled={isPending} type="submit" className="bg-bis-blue text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest flex items-center gap-2">
                                        {isPending ? <Loader2 className="animate-spin" size={18} /> : 'Publish to Pulse'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* List of Notices */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {initialNotices.map((notice: any) => (
                        <div key={notice.id} className="bg-white border border-slate-100 p-6 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex gap-4 items-center">
                                    <div className="w-12 h-12 bg-bis-red/10 text-bis-red rounded-xl flex flex-col items-center justify-center font-black text-xs">
                                        <span className="leading-none uppercase">{notice.date.split(' ')[0]}</span>
                                        <span className="text-lg leading-none">{notice.date.split(' ')[1]}</span>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black text-bis-blue uppercase tracking-widest">{notice.type}</span>
                                        <h4 className="font-bold text-slate-800">{notice.title}</h4>
                                    </div>
                                </div>
                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-all">

                                    <button onClick={() => startTransition(() => deleteNotice(notice.id))} className="p-2 text-slate-400 hover:text-bis-red hover:bg-slate-50 rounded-lg">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>

                            <AnimatePresence>
                                {expandedNotice === notice.id && (
                                    <motion.p initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="text-sm text-slate-500 mt-2 overflow-hidden border-t pt-4">
                                        {notice.description || "No detailed description provided."}
                                    </motion.p>
                                )}
                            </AnimatePresence>

                            <button
                                onClick={() => setExpandedNotice(expandedNotice === notice.id ? null : notice.id)}
                                className="w-full mt-4 flex justify-center text-slate-300 hover:text-slate-500 transition-colors"
                            >
                                <ChevronDown size={20} className={`transition-transform ${expandedNotice === notice.id ? 'rotate-180' : ''}`} />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 2: KEY DATES */}
            <section className="bg-slate-900 rounded-[3.5rem] p-10 text-white shadow-2xl overflow-hidden relative">
                <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-bis-yellow/20 text-bis-yellow rounded-2xl flex items-center justify-center">
                            <Calendar size={24} />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tight">Timeline Key Dates</h3>
                    </div>
                    <button
                        onClick={() => setShowDateForm(!showDateForm)}
                        className="px-6 py-3 border border-white/20 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all"
                    >
                        {showDateForm ? 'Cancel' : '+ Add Event'}
                    </button>
                </div>

                <AnimatePresence>
                    {showDateForm && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="mb-10">
                            <form action={async (fd) => {
                                startTransition(async () => {
                                    await addKeyDate(fd);
                                    setShowDateForm(false);
                                });
                            }} className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-wrap gap-4 items-end">
                                <div className="flex-1 min-w-[200px] space-y-1">
                                    <p className="text-[10px] font-bold text-bis-yellow uppercase ml-2">Full Date</p>
                                    <input name="date" required className="w-full p-4 bg-white/5 rounded-2xl outline-none focus:bg-white/10 border-none" placeholder="March 20, 2026" />
                                </div>
                                <div className="flex-1 min-w-[200px] space-y-1">
                                    <p className="text-[10px] font-bold text-bis-yellow uppercase ml-2">Event Title</p>
                                    <input name="title" required className="w-full p-4 bg-white/5 rounded-2xl outline-none focus:bg-white/10 border-none" placeholder="Entrance Exam" />
                                </div>
                                <button type="submit" className="bg-bis-yellow text-slate-900 px-8 py-4 rounded-2xl font-black uppercase text-xs">
                                    Save Date
                                </button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="space-y-6">
                    {initialKeyDates.map((date: any) => (
                        <div key={date.id} className="flex justify-between items-center group border-l-2 border-bis-yellow/20 pl-8 py-2 hover:border-bis-yellow transition-all">
                            <div>
                                <p className="text-bis-yellow font-black text-xs uppercase tracking-tighter mb-1">{date.date}</p>
                                <h4 className="text-xl font-bold">{date.title}</h4>
                            </div>
                            <button onClick={() => startTransition(() => deleteKeyDate(date.id))} className="p-3 text-white/20 hover:text-bis-red hover:bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all">
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}