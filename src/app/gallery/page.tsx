'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Camera } from 'lucide-react';
import Image from 'next/image';

const photos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d', title: 'Morning Assembly' },
    { id: 2, src: 'https://images.unsplash.com/photo-1523050335392-93851179ae22', title: 'Sports Day' },
    { id: 3, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7', title: 'Science Laboratory' },
    { id: 4, src: 'https://images.unsplash.com/photo-1577891729319-f4871c674881', title: 'Main Campus' },
    { id: 5, src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18', title: 'Cultural Event' },
    { id: 6, src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b', title: 'Library Study' },
    { id: 7, src: 'https://images.unsplash.com/photo-1588072432836-e10032774350', title: 'Art Class' },
    { id: 8, src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b', title: 'Classroom' },
];

export default function GalleryPage() {
    const [selectedImg, setSelectedImg] = useState<typeof photos[0] | null>(null);

    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-350 mx-auto">

                {/* Header */}
                <div className="mb-16 text-center md:text-left">
                    <div className="inline-flex items-center gap-3 text-bis-blue mb-4">
                        <Camera size={24} />
                        <span className="font-black uppercase tracking-[0.3em] text-sm">Life at Bright International</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                        Our <span className="text-bis-red">Moments</span>
                    </h1>
                </div>

                {/* Seamless Column Layout */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {photos.map((photo) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedImg(photo)}
                            className="relative break-inside-avoid rounded-[2rem] overflow-hidden cursor-pointer group bg-white shadow-lg border-4 border-white"
                        >
                            {/* Note: In a column layout, we don't use 'fill'.
                  We use standard sizing so the aspect ratio is preserved. */}
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white">
                                    <Maximize2 size={24} />
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 bg-slate-950/98 backdrop-blur-2xl flex items-center justify-center p-4"
                        onClick={() => setSelectedImg(null)}
                    >
                        <button className="absolute top-8 right-8 text-white/20 hover:text-white transition-all">
                            <X size={48} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="relative max-w-5xl max-h-[85vh] w-full h-full"
                        >
                            <Image
                                src={selectedImg.src}
                                alt={selectedImg.title}
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}