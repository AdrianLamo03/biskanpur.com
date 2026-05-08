'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function NoticeCard({ notice }: any) {
    // Splits "MAY 25" into ["MAY", "25"]
    const [month, day] = notice.date.includes(' ') ? notice.date.split(' ') : ['DATE', '!!'];

    return (
        <motion.div
            whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.15)" }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-2xl flex items-center gap-4 cursor-pointer group transition-colors"
        >
            <div className="w-12 h-12 bg-white rounded-xl flex flex-col items-center justify-center text-bis-red shrink-0 shadow-lg">
                <span className="text-[9px] font-black leading-none uppercase">{month}</span>
                <span className="text-lg font-black leading-none">{day}</span>
            </div>
            <div className="grow">
                <p className="text-[10px] font-black text-bis-blue uppercase mb-1 tracking-widest">{notice.type}</p>
                <h4 className="text-sm font-bold text-white group-hover:text-bis-yellow transition-colors leading-tight">
                    {notice.title}
                </h4>
            </div>
            <ExternalLink size={16} className="text-white/20 group-hover:text-bis-yellow transition-all" />
        </motion.div>
    );
}