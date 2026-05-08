import prisma from "@/lib/prisma";
import DashboardClient from "./DashboardClient";

export default async function AdminDashboard() {
    // Fetch all counts in parallel for speed
    const [noticesCount, keyDatesCount, inquiries] = await Promise.all([
        prisma.notice.count(),
        prisma.keyDate.count(),
        prisma.inquiry.findMany({
            orderBy: { createdAt: 'desc' },
            take: 5 // Only show the most recent 5
        })
    ]);

    const stats = {
        totalNotices: noticesCount,
        totalDates: keyDatesCount,
        pendingInquiries: inquiries.filter(iq => iq.status === 'PENDING').length,
        admissionTotal: inquiries.filter(iq => iq.type === 'ADMISSION').length,
        vacancyTotal: inquiries.filter(iq => iq.type === 'VACANCY').length,
    };

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            <header>
                <h1 className="text-4xl font-black uppercase tracking-tight text-slate-800">Overview</h1>
                <p className="text-slate-500 font-medium text-sm">Welcome back! Here is what's happening at BIS Kanpur.</p>
            </header>

            <DashboardClient stats={stats} recentInquiries={JSON.parse(JSON.stringify(inquiries))} />
        </div>
    );
}