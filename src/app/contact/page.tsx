'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Phone,
    MessageCircle,
    Mail,
    MapPin,
    Send,
    User,
    GraduationCap,
    Briefcase,
    CheckCircle2,
    ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactPage() {
    const [activeForm, setActiveForm] = useState<'admission' | 'vacancy'>('admission');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-6">
                        Get In <span className="text-bis-blue">Touch</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
                        Whether you're looking to enroll your child or join our elite team of educators,
                        we're ready to start the conversation.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Left Column: Quick Contact & Map */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Direct Action Card */}
                        <div className="bg-bis-blue rounded-[2.5rem] p-8 text-white shadow-2xl shadow-bis-blue/20 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black uppercase mb-6">Direct Action</h3>
                                <div className="space-y-4">
                                    <a href="tel:+917052729388" className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-all border border-white/10 group">
                                        <div className="w-12 h-12 bg-white text-bis-blue rounded-xl flex items-center justify-center">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase opacity-60">Call Admissions</p>
                                            <p className="font-bold">+91 705 272 9388</p>
                                        </div>
                                    </a>
                                    <a href="https://wa.me/917052729388" className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-all border border-white/10 group">
                                        <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center">
                                            <MessageCircle size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase opacity-60">WhatsApp Support</p>
                                            <p className="font-bold">Chat with us</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                        </div>

                        {/* Interactive Map Card */}
                        <div className="bg-white rounded-[2.5rem] p-3 border border-slate-200 shadow-sm overflow-hidden">
                            <div className="relative h-64 w-full rounded-[2rem] overflow-hidden group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.027687084278!2d80.29696611435453!3d26.422583087379678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47b51cd1c365%3A0xc1776bdacd9e7450!2sBRIGHT%20International%20School!5e0!3m2!1sen!2sin!4v1649275680985!5m2!1sen!2sin"
                                    className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <a
                                    href="https://maps.app.goo.gl/kX7D8tPZ6j6pPz9aA"
                                    target="_blank"
                                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg text-slate-800 hover:bg-bis-blue hover:text-white transition-all group-hover:scale-110"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                            <div className="p-5 space-y-4">
                                <div className="flex gap-3">
                                    <MapPin className="text-bis-red shrink-0" size={20} />
                                    <p className="text-slate-800 font-bold leading-tight text-sm">J-103 Barra World Bank, Kanpur, UP</p>
                                </div>
                                <div className="flex gap-3">
                                    <Mail className="text-bis-yellow shrink-0" size={20} />
                                    <p className="text-slate-800 font-bold leading-tight text-sm truncate">brightinternationalschool103@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Dynamic Form Hub */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 relative">

                            {/* Form Switcher */}
                            <div className="flex flex-wrap gap-4 mb-10 p-2 bg-slate-100 rounded-3xl w-fit">
                                <button
                                    onClick={() => setActiveForm('admission')}
                                    className={cn(
                                        "px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2",
                                        activeForm === 'admission' ? "bg-white text-bis-blue shadow-md" : "text-slate-500 hover:text-slate-800"
                                    )}
                                >
                                    <GraduationCap size={16} /> Admission Inquiry
                                </button>
                                <button
                                    onClick={() => setActiveForm('vacancy')}
                                    className={cn(
                                        "px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2",
                                        activeForm === 'vacancy' ? "bg-white text-bis-red shadow-md" : "text-slate-500 hover:text-slate-800"
                                    )}
                                >
                                    <Briefcase size={16} /> Job Vacancy
                                </button>
                            </div>

                            {submitted ? (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-20 text-center">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase mb-2">Message Received!</h3>
                                    <p className="text-slate-500">Our team will contact you within 24-48 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                            <input required type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-bis-blue transition-all outline-none text-slate-800 font-medium" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                            <input required type="tel" placeholder="+91 00000 00000" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-bis-blue transition-all outline-none text-slate-800 font-medium" />
                                        </div>
                                    </div>

                                    {/* Admission Fields */}
                                    {activeForm === 'admission' && (
                                        <>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Seeking Grade</label>
                                                <div className="relative">
                                                    <select required defaultValue="" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-bis-blue outline-none text-slate-800 font-medium appearance-none cursor-pointer">
                                                        <option value="" disabled>Select Grade</option>
                                                        {['Playgroup', 'Nursery', 'L.K.G', 'U.K.G', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8'].map(grade => (
                                                            <option key={grade} value={grade}>{grade}</option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-2 md:col-span-2">
                                                <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Questions?</label>
                                                <textarea rows={4} placeholder="Tell us about your child..." className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-bis-blue outline-none text-slate-800 font-medium" />
                                            </div>
                                        </>
                                    )}

                                    {/* Vacancy Fields - FIXED LOGIC HERE */}
                                    {activeForm === 'vacancy' && (
                                        <>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Position Applied For</label>
                                                <div className="relative">
                                                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                                    <input required type="text" placeholder="e.g. Science Teacher" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-bis-red outline-none text-slate-800 font-medium" />
                                                </div>
                                            </div>
                                            <div className="space-y-2 md:col-span-2">
                                                <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Experience & LinkedIn Link</label>
                                                <input required type="url" placeholder="Paste link here" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-bis-red transition-all outline-none text-slate-800 font-medium" />
                                            </div>
                                            <div className="space-y-2 md:col-span-2">
                                                <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Brief Bio</label>
                                                <textarea rows={3} placeholder="Your teaching philosophy..." className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-bis-red outline-none text-slate-800 font-medium" />
                                            </div>
                                        </>
                                    )}

                                    <button type="submit" className={cn(
                                        "md:col-span-2 py-5 rounded-[2rem] font-black uppercase tracking-[0.2em] text-white transition-all flex items-center justify-center gap-3 mt-4",
                                        activeForm === 'admission' ? "bg-bis-blue hover:bg-slate-900" : "bg-bis-red hover:bg-slate-900"
                                    )}>
                                        Submit <Send size={18} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}