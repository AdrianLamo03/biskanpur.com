'use client';

import {motion} from 'framer-motion';
import {Users, GraduationCap, Calendar, Trophy} from 'lucide-react';
import {cn} from '@/lib/utils';

const stats = [
    {label: 'Expert Educators', value: '50+', icon: Users, color: 'text-bis-blue', bg: 'bg-bis-blue/10'},
    {label: 'Happy Students', value: '1,200+', icon: GraduationCap, color: 'text-bis-red', bg: 'bg-bis-red/10'},
    {label: 'Years of Legacy', value: '20+', icon: Calendar, color: 'text-purple-500', bg: 'bg-purple-500/20'},
    {label: 'Awards Won', value: '15+', icon: Trophy, color: 'text-green-500', bg: 'bg-green-500/10'},
];

export function Stats() {
    return (
        <section className="relative py-12 px-4 -mt-10 z-30">
            <div className="max-w-7xl mx-auto">
                {/* Main Glass Container */}
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="bg-white/20 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-[2.5rem] p-8 md:p-12"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{opacity: 0, scale: 0.5}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    delay: i * 0.1
                                }}
                                viewport={{once: true}}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Icon Circle */}
                                <div className={cn(
                                    "w-14 h-14 md:w-16 md:h-16 rounded-2xl mb-4 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 shadow-sm",
                                    stat.bg,
                                    stat.color
                                )}>
                                    <stat.icon size={28} className="md:w-8 md:h-8"/>
                                </div>

                                {/* Value */}
                                <h2 className={cn(
                                    "text-3xl md:text-5xl font-black mb-1 tracking-tight",
                                    stat.color
                                )}>
                                    {stat.value}
                                </h2>

                                {/* Label */}
                                <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] md:text-xs">
                                    {stat.label}
                                </p>

                                {/* Subtle Divider for Mobile */}
                                {i < stats.length - 1 && (
                                    <div
                                        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-slate-200"/>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}