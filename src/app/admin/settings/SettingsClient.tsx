'use client';

import { useTransition } from 'react';
import { updateSettings } from '@/app/actions/settings';
import { Save, Megaphone, Bell, Loader2 } from 'lucide-react';

export default function SettingsClient({ initialData }: any) {
    const [isPending, startTransition] = useTransition();

    return (
        <form action={(fd) => startTransition(() => updateSettings(fd))} className="space-y-8">

            {/* CAMPUS STATUS CARD */}
            <div className="bg-white border border-slate-100 p-8 rounded-[3rem] shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-bis-blue/10 text-bis-blue rounded-2xl flex items-center justify-center">
                        <Bell size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black uppercase">Admission Status</h3>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Toggle site-wide admission alerts</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["Open for Admission", "Admission Closed", "Limited Seats Available"].map((status) => (
                        <label key={status} className="relative flex items-center p-4 border rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-bis-blue has-[:checked]:bg-bis-blue/5 group">
                            <input
                                type="radio"
                                name="campusStatus"
                                value={status}
                                defaultChecked={initialData.campusStatus === status}
                                className="w-4 h-4 text-bis-blue border-slate-300 focus:ring-bis-blue"
                            />
                            <span className="ml-3 font-bold text-slate-700 group-has-[:checked]:text-bis-blue">{status}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* MARQUEE TEXT CARD */}
            <div className="bg-slate-900 text-white p-8 rounded-[3rem] shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-white/10 text-bis-yellow rounded-2xl flex items-center justify-center">
                        <Megaphone size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black uppercase">Homepage Marquee</h3>
                        <p className="text-xs font-medium text-white/40 uppercase tracking-widest">Scrolling announcement text</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <textarea
                        name="marqueeText"
                        defaultValue={initialData.marqueeText}
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-bis-yellow font-bold text-lg outline-none focus:border-bis-yellow/50 transition-all"
                        placeholder="Type your announcement here..."
                    />
                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest ml-2">Keep it concise for better readability</p>
                </div>
            </div>

            {/* SAVE BUTTON */}
            <div className="flex justify-end pt-4">
                <button
                    disabled={isPending}
                    type="submit"
                    className="flex items-center gap-3 bg-bis-red text-white px-10 py-5 rounded-[2rem] font-black uppercase tracking-[0.2em] shadow-lg shadow-bis-red/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
                >
                    {isPending ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                    {isPending ? 'Updating...' : 'Save All Changes'}
                </button>
            </div>
        </form>
    );
}