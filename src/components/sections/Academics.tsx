'use client';

import { motion } from 'framer-motion';
import { BookOpen, Palette, Trophy, Microscope, Music, Globe, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const programs = [
  {
    title: 'Pre-Primary School',
    description: 'Our early years program focuses on a multi-sensory approach where learning happens through structured play, creative discovery, and gentle social interaction designed for our youngest explorers to thrive.',
    icon: Palette,
    color: 'text-bis-red',
    accent: 'bg-bis-red',
    img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Primary School',
    description: 'We build a rock-solid foundation in core academic subjects by blending traditional literacy and numeracy with modern inquiry-based learning, ensuring every child remains curious and confident in their abilities.',
    icon: BookOpen,
    color: 'text-bis-blue',
    accent: 'bg-bis-blue',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Secondary School',
    description: 'Our middle years curriculum prepares students for global challenges by combining rigorous academic standards with hands-on leadership opportunities and advanced critical thinking skills across all major disciplines.',
    icon: Microscope,
    color: 'text-bis-yellow',
    accent: 'bg-bis-yellow',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Arts & Music',
    description: 'Creativity is at the heart of BIS. Our specialized programs in performing and visual arts allow students to express themselves through various mediums, from classical music theory to modern digital design.',
    icon: Music,
    color: 'text-purple-500',
    accent: 'bg-purple-500',
    img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Sports Academy',
    description: 'Physical education at BIS goes beyond the field; we promote lifelong health, strategic teamwork, and resilient sportsmanship through professional coaching in football, basketball, and track events.',
    icon: Trophy,
    color: 'text-orange-500',
    accent: 'bg-orange-500',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Global Languages',
    description: 'In an increasingly connected world, we develop multilingual communicators by offering immersive language courses that focus on both linguistic fluency and deep cultural appreciation from a young age.',
    icon: Globe,
    color: 'text-green-500',
    accent: 'bg-green-500',
    img: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=400'
  }
];

export function Academics() {
  return (
      <section id="academics" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-1 bg-bis-blue/10 text-bis-blue rounded-full text-xs font-black uppercase tracking-widest mb-4"
            >
              Academic Pathways
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-slate-800 uppercase tracking-tighter">
              Our <span className="text-bis-blue">Programs</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg italic font-medium">
              &ldquo;Education is the kindling of a flame, not the filling of a vessel.&rdquo;
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
                <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                        src={program.img}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                    {/* Floating Icon Glass Overlay */}
                    <div className="absolute bottom-4 right-4 p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-white">
                      <program.icon size={24} />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8">
                    <div className={cn("w-12 h-1.5 rounded-full mb-4", program.accent)} />
                    <h3 className="text-2xl font-black text-slate-800 mb-3 uppercase tracking-tight">
                      {program.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm font-medium min-h-20">
                      {program.description}
                    </p>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}