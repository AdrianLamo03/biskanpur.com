'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';

export default function NavbarWrapper() {
    const pathname = usePathname();

    // Don't show navbar on any admin routes
    if (pathname.startsWith('/admin')) {
        return null;
    }

    return <Navbar />;
}