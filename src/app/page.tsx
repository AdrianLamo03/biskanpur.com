import {Navbar} from '@/components/layout/Navbar';
import {Footer} from '@/components/layout/Footer';
import {Hero} from '@/components/sections/Hero';
import {Stats} from '@/components/sections/Stats';
import {About} from "@/components/sections/About";
import {DirectorNews} from "@/components/sections/DirectorNews"
import {Academics} from '@/components/sections/Academics';
import {Admissions} from '@/components/sections/Admissions';
import {NewsEvents} from '@/components/sections/NewsEvents';
import {FAQAndContact} from "@/components/sections/FAQAndContact";

export default function Home() {
    return (
        <div className="min-h-screen selection:bg-brand-blue selection:text-white">
            <main>
                <Hero/>
                <Stats/>
                <About/>
                <DirectorNews/>
                <Academics/>
                <Admissions/>
                <NewsEvents/>
                <FAQAndContact/>
            </main>
        </div>
    );
}
