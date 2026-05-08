import prisma from "@/lib/prisma";
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GalleryCard } from "./GalleryCard"; // We'll create this animated sub-component

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

export async function NewsEvents() {
  // 1. Fetch live Key Dates from DB
  const keyDates = await prisma.keyDate.findMany({
    orderBy: { createdAt: 'asc' }, // Usually chronological
    take: 3 // Keeps the sidebar height balanced
  });

  // 2. Fetch Global Campus Status
  const settings = await prisma.siteSettings.findUnique({
    where: { id: 'global' }
  });

  return (
      <section className="py-20 px-4 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">

            {/* Left: Dynamic Sidebar (The Pulse) */}
            <div className="lg:col-span-1">
              <div className="bg-bis-blue rounded-[2.5rem] p-8 text-white h-full shadow-xl shadow-bis-blue/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-10">
                    <Calendar size={20} className="text-bis-yellow" />
                    <h3 className="font-black uppercase tracking-widest text-sm">Key Dates</h3>
                  </div>

                  <div className="space-y-10">
                    {keyDates.length > 0 ? keyDates.map((event) => (
                        <div key={event.id} className="border-l-2 border-bis-yellow/40 pl-4 group">
                          <p className="text-bis-yellow font-black text-[10px] uppercase mb-1 tracking-widest">
                            {event.date}
                          </p>
                          <h4 className="font-bold text-sm leading-tight group-hover:text-bis-yellow transition-colors cursor-default uppercase">
                            {event.title}
                          </h4>
                        </div>
                    )) : (
                        <p className="text-white/30 text-xs italic">No upcoming dates scheduled.</p>
                    )}
                  </div>
                </div>

                {/* Dynamic Campus Status */}
                <div className="mt-12 p-5 bg-white/10 rounded-3xl border border-white/10 backdrop-blur-sm">
                  <p className="text-[10px] font-black uppercase opacity-60 mb-2 tracking-[0.2em]">Campus Status</p>
                  <div className="flex items-center gap-3">
                    <div className={cn(
                        "w-2.5 h-2.5 rounded-full animate-pulse",
                        settings?.campusStatus === "Admission Closed" ? "bg-red-400" : "bg-green-400"
                    )} />
                    <span className="text-[11px] font-black uppercase tracking-tighter">
                                        {settings?.campusStatus || "Open for Admission"}
                                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Visual Gallery (Animated via GalleryCard) */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-6 h-full">
                {highlights.map((item, i) => (
                    <GalleryCard key={i} item={item} i={i} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}