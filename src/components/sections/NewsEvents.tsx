'use client';

import { motion } from 'framer-motion';
import { Image as ImageIcon, Calendar, MapPin, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const highlights = [
  {
    title: 'Science & Innovation',
    tag: 'Academic',
    color: 'text-bis-blue bg-bis-blue/10',
    img: 'https://images.unsplash.com/photo-1759866042499-d0b3e9d87ceb?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Annual Sports Meet',
    tag: 'Athletics',
    color: 'text-bis-red bg-bis-red/10',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Creative Arts Workshop',
    tag: 'Culture',
    color: 'text-bis-yellow bg-bis-yellow/10',
    img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=600'
  }
];

const quickEvents = [
  { title: 'Summer Break Starts', date: '20 May' },
  { title: 'New Session Orientation', date: '05 Jun' },
  { title: 'Inter-School Debate', date: '12 Jun' },
];

export function NewsEvents() {
  return (
      <section  className="py-20 px-4 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-4 gap-8">

            {/* Left: Quick Calendar (The only thing you'd ever need to update) */}
            <div className="lg:col-span-1">
              <div className="bg-bis-blue rounded-[2.5rem] p-8 text-white h-full shadow-xl shadow-bis-blue/20">
                <div className="flex items-center gap-2 mb-8">
                  <Calendar size={20} className="text-bis-yellow" />
                  <h3 className="font-black uppercase tracking-widest text-sm">Key Dates</h3>
                </div>

                <div className="space-y-8">
                  {quickEvents.map((event, i) => (
                      <div key={i} className="border-l-2 border-white/20 pl-4">
                        <p className="text-bis-yellow font-black text-xs uppercase mb-1">{event.date}</p>
                        <h4 className="font-bold text-sm leading-tight">{event.title}</h4>
                      </div>
                  ))}
                </div>

                <div className="mt-12 p-4 bg-white/10 rounded-2xl border border-white/10">
                  <p className="text-[10px] font-black uppercase opacity-60 mb-2">Campus Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs font-bold">Open for Admission</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Visual Gallery (No "Read More" needed) */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-6 h-full">
                {highlights.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] bg-white shadow-lg border border-white"
                    >
                      <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Glass Overlay - Permanent info, no sub-pages */}
                      <div className="absolute inset-x-4 bottom-4 p-5 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl">
                        <div className={cn("inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-3", item.color)}>
                          {item.tag}
                        </div>
                        <h3 className="text-lg font-black text-slate-800 leading-tight uppercase tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                    </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}