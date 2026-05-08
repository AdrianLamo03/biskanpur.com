'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Bell, MessageSquare, Settings, LogOut, ExternalLink } from 'lucide-react';
import { signOut } from "next-auth/react";

export default function AdminSidebarWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Overview', href: '/admin', icon: LayoutDashboard },
        { name: 'Notice Board', href: '/admin/notices', icon: Bell },
        { name: 'Inquiry Inbox', href: '/admin/inbox', icon: MessageSquare },
        { name: 'Site Settings', href: '/admin/settings', icon: Settings },
    ];

    return (
        <div className="flex min-h-screen bg-[#f8fafc]">
            <aside className="w-64 bg-slate-900 text-white fixed h-full flex flex-col p-6 z-50">
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="w-8 h-8 bg-bis-red rounded-lg flex items-center justify-center font-black">B</div>
                    <span className="font-black text-lg uppercase tracking-tighter text-white">BIS Admin</span>
                </div>

                <nav className="flex-1 space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                                    isActive ? 'bg-bis-blue text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                <Icon size={20} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="pt-6 border-t border-white/10 space-y-2">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 text-slate-400 font-bold text-sm hover:text-white">
                        <ExternalLink size={20} /> Live Site
                    </Link>

                    <button
                        onClick={() => signOut({ callbackUrl: '/login' })}
                        className="cursor-pointer flex items-center gap-3 px-4 py-3 text-red-400 font-bold text-sm hover:text-red-300 w-full transition-colors"
                    >
                        <LogOut size={20} /> Logout
                    </button>
                </div>
            </aside>

            <main className="flex-1 ml-64 p-10">
                {children}
            </main>
        </div>
    );
}