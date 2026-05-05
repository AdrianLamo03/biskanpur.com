import type {Metadata} from 'next';
import {Inter, Quicksand} from 'next/font/google';
import './globals.css';
import {Navbar} from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";

const inter = Inter({subsets: ['latin'], variable: '--font-sans'});
const quicksand = Quicksand({subsets: ['latin'], variable: '--font-display'});

export const metadata: Metadata = {
    title: 'Bright Horizon Academy | Empowering Young Minds',
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
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
