'use client';

import {motion, AnimatePresence} from 'framer-motion';
import {CheckCircle, ClipboardList, UserCheck, Heart, Send, Sparkles, Loader2} from 'lucide-react';
import {useState, useTransition} from 'react';
import {cn} from '@/lib/utils';
import {submitInquiry} from '@/app/actions/contact';

const steps = [
    {
        title: 'Inquiry',
        desc: 'Fill out our digital inquiry form to express your interest.',
        icon: ClipboardList,
        color: 'text-bis-yellow'
    },
    {
        title: 'School Visit',
        desc: 'Schedule a personalized tour of our modern campus.',
        icon: Heart,
        color: 'text-bis-red'
    },
    {
        title: 'Interactive Session',
        desc: 'A friendly meeting with our academic coordinators.',
        icon: UserCheck,
        color: 'text-purple-400'
    },
    {
        title: 'Final Enrollment',
        desc: 'Welcome your child to the Bright Stars family!',
        icon: CheckCircle,
        color: 'text-green-400'
    },
];

export function Admissions() {
    const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    async function handleAction(formData: FormData) {
        const fName = formData.get('firstName');
        const lName = formData.get('lastName');

        // Combine names for our database 'name' field
        formData.append('name', `${fName} ${lName}`);
        formData.append('type', 'ADMISSION');
        formData.append('phone', 'Provided via Email'); // Or add a phone field to this form too
        formData.append('message', `Inquiry sent via Homepage Admissions Section. Applying for: ${formData.get('grade')}`);

        startTransition(async () => {
            const result = await submitInquiry(formData);
            if (result.success) {
                setStatus('success');
            } else {
                alert("Something went wrong. Please try again.");
            }
        });
    }

    return (
        <section id="admissions" className="py-24 px-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-bis-blue/10 rounded-full blur-[100px] -z-10"/>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-bis-red/10 rounded-full blur-[100px] -z-10"/>

            <div
                className="max-w-7xl mx-auto rounded-[3.5rem] bg-slate-900 p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">

                {/* Decorative Ring */}
                <motion.div
                    animate={{rotate: 360}}
                    transition={{duration: 25, repeat: Infinity, ease: "linear"}}
                    className="absolute -top-24 -right-24 w-64 h-64 border-[30px] border-white/5 rounded-full"
                />

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Process Steps */}
                    <div>
                        <div
                            className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-white/10">
                            <Sparkles size={14} className="text-bis-yellow"/>
                            <span>Admissions 2026-27 Now Open</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">
                            Join Our <br/><span className="text-bis-yellow">Community</span>
                        </h2>

                        <p className="text-white/70 text-lg mb-12 leading-relaxed font-medium italic">
                            "Providing your child with the foundation they need to lead, innovate, and inspire in a
                            global world."
                        </p>

                        <div className="space-y-8">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={step.title}
                                    initial={{opacity: 0, x: -20}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: i * 0.1}}
                                    className="flex gap-5 group"
                                >
                                    <div className={cn(
                                        "flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center font-black transition-all group-hover:bg-bis-blue group-hover:border-bis-blue",
                                        step.color
                                    )}>
                                        <step.icon size={22}/>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-xl mb-1 uppercase tracking-tight">{step.title}</h3>
                                        <p className="text-white/40 text-sm font-medium leading-snug">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: The Form */}
                    <div
                        className="bg-white rounded-[2.5rem] p-8 md:p-10 text-slate-800 shadow-2xl relative border border-white">
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{opacity: 0, scale: 0.9}}
                                    animate={{opacity: 1, scale: 1}}
                                    className="text-center py-12"
                                >
                                    <div
                                        className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle size={48}/>
                                    </div>
                                    <h3 className="text-3xl font-black mb-3 uppercase tracking-tighter">Application
                                        Sent!</h3>
                                    <p className="text-slate-500 mb-8 font-medium">
                                        Our admissions officer will reach out via email shortly.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-bis-blue transition-all"
                                    >
                                        New Application
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div key="form" initial={{opacity: 0}} animate={{opacity: 1}}
                                            exit={{opacity: 0}}>
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Express
                                            Interest</h3>
                                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">Start
                                            your child's journey</p>
                                    </div>

                                    <form action={handleAction} className="space-y-5">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label
                                                    className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Parent
                                                    First Name</label>
                                                <input name="firstName" required type="text" placeholder="John"
                                                       className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-bis-blue outline-none transition-all font-bold text-sm"/>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label
                                                    className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Last
                                                    Name</label>
                                                <input name="lastName" required type="text" placeholder="Doe"
                                                       className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-bis-blue outline-none transition-all font-bold text-sm"/>
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label
                                                className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Email
                                                Address</label>
                                            <input name="email" required type="email" placeholder="contact@example.com"
                                                   className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-bis-blue outline-none transition-all font-bold text-sm"/>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label
                                                className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Applying
                                                For Grade</label>
                                            <select name="grade" required
                                                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl focus:ring-2 focus:ring-bis-blue outline-none text-slate-800 font-medium appearance-none">
                                                <option value="">Select Grade</option>
                                                {['Playgroup', 'Nursery', 'L.K.G', 'U.K.G', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8'].map(grade => (
                                                    <option key={grade} value={grade}>{grade}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <button
                                            disabled={isPending}
                                            className="w-full py-5 bg-bis-yellow text-slate-900 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                        >
                                            {isPending ?
                                                <Loader2 className="animate-spin" size={20}/> : "Submit Application"}
                                            {!isPending && <Send size={18}/>}
                                        </button>

                                        <p className="text-[9px] text-slate-400 text-center font-bold px-4 leading-relaxed uppercase tracking-tighter">
                                            Authorized Secure Application Portal <br/> Bright International School
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