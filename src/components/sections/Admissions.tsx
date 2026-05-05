'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ClipboardList, UserCheck, Heart, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const steps = [
  { title: 'Inquiry', desc: 'Fill out our digital inquiry form to express your interest.', icon: ClipboardList, color: 'text-bis-yellow' },
  { title: 'School Visit', desc: 'Schedule a personalized tour of our modern campus.', icon: Heart, color: 'text-bis-red' },
  { title: 'Interactive Session', desc: 'A friendly meeting with our academic coordinators.', icon: UserCheck, color: 'text-brand-pink' },
  { title: 'Final Enrollment', desc: 'Welcome your child to the Bright Stars family!', icon: CheckCircle, color: 'text-green-400' },
];

export function Admissions() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    grade: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulating database call
    setTimeout(() => {
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', grade: '' });
    }, 1500);
  };

  return (
      <section id="admissions" className="py-24 px-4 relative overflow-hidden">
        {/* Decorative Blur Backgrounds */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-bis-blue/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-bis-red/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto rounded-[3.5rem] bg-bis-blue p-8 md:p-16 text-white overflow-hidden relative shadow-2xl shadow-bis-blue/20">

          {/* Animated Background Glass elements */}
          <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-24 -right-24 w-64 h-64 border-[30px] border-white/5 rounded-full"
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side: Process */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-white/10">
                <Sparkles size={14} className="text-bis-yellow" />
                <span>Admissions 2026-27 Now Open</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">
                Join Our <br /><span className="text-bis-yellow">Community</span>
              </h2>

              <p className="text-white/70 text-lg mb-12 leading-relaxed font-medium italic">
                "Providing your child with the foundation they need to lead, innovate, and inspire in a global world."
              </p>

              <div className="space-y-8">
                {steps.map((step, i) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-5 group"
                    >
                      <div className={cn(
                          "flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center font-black transition-all group-hover:bg-white group-hover:text-bis-blue",
                          step.color
                      )}>
                        <step.icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-black text-xl mb-1 uppercase tracking-tight">{step.title}</h3>
                        <p className="text-white/50 text-sm font-medium">{step.desc}</p>
                      </div>
                    </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Glass Form */}
            <div className="bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 text-slate-800 shadow-2xl relative border border-white">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                    >
                      <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                        <CheckCircle size={48} />
                      </div>
                      <h3 className="text-3xl font-black mb-3 text-slate-800 uppercase tracking-tighter">Application Sent!</h3>
                      <p className="text-slate-500 mb-8 font-medium">
                        Our admissions officer will contact you within 24 business hours to schedule your visit.
                      </p>
                      <button
                          onClick={() => setStatus('idle')}
                          className="px-8 py-3 bg-bis-blue text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-lg transition-all"
                      >
                        Send Another
                      </button>
                    </motion.div>
                ) : (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Express Interest</h3>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Direct Admission Inquiry</p>
                      </div>

                      <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">First Name</label>
                            <input
                                required
                                type="text"
                                className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-transparent border-2 focus:border-bis-blue focus:bg-white outline-none transition-all font-bold text-sm"
                                placeholder="Parent's Name"
                                value={formData.firstName}
                                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Last Name</label>
                            <input
                                required
                                type="text"
                                className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-transparent border-2 focus:border-bis-blue focus:bg-white outline-none transition-all font-bold text-sm"
                                placeholder="Surname"
                                value={formData.lastName}
                                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Email Address</label>
                          <input
                              required
                              type="email"
                              className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-transparent border-2 focus:border-bis-blue focus:bg-white outline-none transition-all font-bold text-sm"
                              placeholder="example@mail.com"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Applying For</label>
                          <select
                              required
                              className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-transparent border-2 focus:border-bis-blue focus:bg-white outline-none transition-all font-bold text-sm appearance-none"
                              value={formData.grade}
                              onChange={(e) => setFormData({...formData, grade: e.target.value})}
                          >
                            <option value="">Select Grade</option>
                            <option value="Playgroup">Playgroup / Nursery</option>
                            <option value="Primary">Primary (Grade 1-5)</option>
                            <option value="Middle">Middle (Grade 6-8)</option>
                          </select>
                        </div>

                        <button
                            disabled={status === 'loading'}
                            className="w-full py-5 bg-bis-yellow text-slate-900 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-bis-yellow/30 transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
                        >
                          {status === 'loading' ? 'Processing...' : 'Submit Application'}
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>

                        <p className="text-[9px] text-slate-400 text-center font-bold px-4 leading-relaxed uppercase tracking-tight">
                          By submitting, you agree to receive school updates and admission notifications via email.
                        </p>
                      </form>
                    </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
  );
}