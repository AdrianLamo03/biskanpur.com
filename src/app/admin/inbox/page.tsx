import prisma from "@/lib/prisma";
import InboxClient from "./InboxClient";

export default async function InboxPage() {
    const inquiries = await prisma.inquiry.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <header>
                <h1 className="text-4xl font-black uppercase tracking-tight text-slate-800">Inquiry Inbox</h1>
                <p className="text-slate-500 font-medium">Manage admissions and job applications.</p>
            </header>

            <InboxClient initialInquiries={JSON.parse(JSON.stringify(inquiries))} />
        </div>
    );
}