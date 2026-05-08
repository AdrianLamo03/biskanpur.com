import type {Metadata} from 'next';
import {Inter, Quicksand} from 'next/font/google';
import './globals.css';
import {Footer} from "@/components/layout/Footer";
import NavbarWrapper from "@/components/layout/NavbarWrapper";

const inter = Inter({subsets: ['latin'], variable: '--font-sans'});
const quicksand = Quicksand({subsets: ['latin'], variable: '--font-display'});

export const metadata: Metadata = {
    title: 'Bright International School | Empowering Young Minds',
    description: 'A vibrant, professional school environment focused on nurturing future leaders.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${inter.variable} ${quicksand.variable} font-sans antialiased`}>
        <NavbarWrapper/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
