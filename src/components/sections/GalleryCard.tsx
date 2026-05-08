'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function GalleryCard({ item, i }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] bg-white shadow-lg border border-white"
        >
            <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Glass Overlay */}
            <div className="absolute inset-x-4 bottom-4 p-5 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className={cn(
                    "inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-3",
                    item.color
                )}>
                    {item.tag}
                </div>
                <h3 className="text-lg font-black text-slate-800 leading-tight uppercase tracking-tight group-hover:text-bis-blue transition-colors">
                    {item.title}
                </h3>
            </div>
        </motion.div>
    );
}