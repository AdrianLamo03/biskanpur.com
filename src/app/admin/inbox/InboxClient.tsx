'use client';

import { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, GraduationCap, Briefcase, Trash2, CheckCircle, Clock, Search } from 'lucide-react';
import { updateInquiryStatus, deleteInquiry } from '@/app/actions/inquiries';

export default function InboxClient({ initialInquiries }: any) {
    const [filter, setFilter] = useState('ALL');
    const [isPending, startTransition] = useTransition();

    const filtered = initialInquiries.filter((iq: any) =>
        filter === 'ALL' ? true : iq.type === filter
    );

    return (
        <div className="space-y-6">
            {/* Filter Tabs */}
            <div className="flex gap-2 p-1 bg-slate-100 rounded-2xl w-fit">
                {['ALL', 'ADMISSION', 'VACANCY'].map((t) => (
                    <button
                        key={t}
                        onClick={() => setFilter(t)}
                        className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                            filter === t ? 'bg-white shadow-sm text-bis-blue' : 'text-slate-400 hover:text-slate-600'
                        }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* List */}
            <div className="grid grid-cols-1 gap-4">
                <AnimatePresence mode="popLayout">
                    {filtered.length > 0 ? filtered.map((iq: any) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            key={iq.id}
                            className={`bg-white border-2 p-6 rounded-[2.5rem] transition-all ${
                                iq.status === 'PENDING' ? 'border-bis-yellow/20' : 'border-slate-100'
                            }`}
                        >
                            <div className="flex flex-wrap justify-between items-start gap-4">
                                <div className="flex gap-4">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                                        iq.type === 'ADMISSION' ? 'bg-bis-blue/10 text-bis-blue' : 'bg-purple-100 text-purple-600'
                                    }`}>
                                        {iq.type === 'ADMISSION' ? <GraduationCap size={24}/> : <Briefcase size={24}/>}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-black text-lg text-slate-800">{iq.name}</h4>
                                            <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter ${
                                                iq.status === 'PENDING' ? 'bg-bis-yellow text-black' : 'bg-green-100 text-green-600'
                                            }`}>
                                                {iq.status}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-4 mt-1 text-slate-500 text-xs font-medium">
                                            <span className="flex items-center gap-1"><Phone size={14}/> {iq.phone}</span>
                                            {iq.email && <span className="flex items-center gap-1"><Mail size={14}/> {iq.email}</span>}
                                            <span className="font-bold text-bis-blue uppercase">
                                                {iq.type === 'ADMISSION' ? `Grade: ${iq.grade}` : `Post: ${iq.position}`}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => startTransition(() => updateInquiryStatus(iq.id, iq.status === 'PENDING' ? 'CONTACTED' : 'PENDING'))}
                                        className={`p-3 rounded-xl transition-colors ${iq.status === 'PENDING' ? 'bg-slate-50 text-slate-400 hover:text-green-500' : 'bg-green-50 text-green-600'}`}
                                    >
                                        <CheckCircle size={20}/>
                                    </button>
                                    <button
                                        onClick={() => { if(confirm('Delete this inquiry?')) startTransition(() => deleteInquiry(iq.id)) }}
                                        className="p-3 bg-slate-50 text-slate-400 hover:text-bis-red rounded-xl transition-colors"
                                    >
                                        <Trash2 size={20}/>
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <p className="text-sm text-slate-600 leading-relaxed italic">"{iq.message}"</p>
                            </div>

                            <p className="mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">
                                Received on {new Date(iq.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </p>
                        </motion.div>
                    )) : (
                        <div className="py-20 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                            <Clock className="mx-auto text-slate-300 mb-4" size={48}/>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No {filter.toLowerCase()} inquiries found</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}