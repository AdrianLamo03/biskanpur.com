import prisma from "@/lib/prisma";
import SettingsClient from "./SettingsClient";

export default async function SettingsPage() {
    const settings = await prisma.siteSettings.findUnique({
        where: { id: 'global' },
    });

    // Default values if DB is empty
    const defaultSettings = {
        campusStatus: "Open for Admission",
        marqueeText: "Welcome to Bright International School..."
    };

    return (
        <div className="max-w-4xl mx-auto space-y-10">
            <header>
                <h1 className="text-4xl font-black uppercase tracking-tight text-slate-800">Site Settings</h1>
                <p className="text-slate-500 font-medium">Control global alerts and system status.</p>
            </header>

            <SettingsClient initialData={settings || defaultSettings} />
        </div>
    );
}