'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Sparkles } from 'lucide-react';

export function About() {
    return (
        <section  className="py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div id="about" className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-bis-blue/10 text-bis-blue rounded-full font-black text-[10px] uppercase tracking-[0.2em] mb-6">
                            <Sparkles size={14} />
                            <span>Since 2004</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-800 uppercase tracking-tighter leading-[0.95]">
                            Nurturing curiosity, <br />
                            <span className="text-bis-blue">one child at a time.</span>
                        </h2>

                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium italic">
                            <p>
                                At Bright International School, we believe that education is more than just textbooks. It&apos;s about fostering a passion for learning that lasts a lifetime.
                            </p>
                            <p className="not-italic text-slate-500 text-base">
                                Our dedicated faculty provides personalized attention to each student, ensuring they have the tools and confidence to succeed in an ever-changing world.
                            </p>
                        </div>

                        {/* Mission & Vision: Glass Cards */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-white/40 backdrop-blur-md border border-white shadow-xl rounded-3xl group hover:bg-bis-blue hover:text-white transition-all duration-300">
                                <div className="w-12 h-12 bg-bis-blue/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20">
                                    <Target className="text-bis-blue group-hover:text-white" />
                                </div>
                                <h4 className="text-xl font-black mb-2 uppercase tracking-tight">Our Mission</h4>
                                <p className="text-sm opacity-80 font-medium">To inspire students to reach their full potential through holistic education and character building.</p>
                            </div>

                            <div className="p-6 bg-white/40 backdrop-blur-md border border-white shadow-xl rounded-3xl group hover:bg-bis-yellow hover:text-slate-900 transition-all duration-300">
                                <div className="w-12 h-12 bg-bis-yellow/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20">
                                    <Eye className="text-bis-yellow group-hover:text-slate-900" />
                                </div>
                                <h4 className="text-xl font-black mb-2 uppercase tracking-tight">Our Vision</h4>
                                <p className="text-sm opacity-80 font-medium">To be a leader in innovative teaching, creating future global citizens with strong values.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Image Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        {/* Background Accent */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-bis-yellow/20 blur-[100px] -z-10" />

                        {/* The Image Frames */}
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative z-20 rounded-3xl overflow-hidden rotate-2 border-10 border-white shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
                                    alt="School library"
                                    className="w-full aspect-4/5 object-cover"
                                />
                            </div>

                            {/* Decorative Glass Box behind */}
                            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-bis-blue/20 rounded-[3.5rem] -z-10 -rotate-2" />

                            {/* Experience Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-10 -left-10 z-30 bg-white/90 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-white/50"
                            >
                                <p className="text-4xl font-black text-bis-blue">20+</p>
                                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Years of <br/> Excellence</p>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}