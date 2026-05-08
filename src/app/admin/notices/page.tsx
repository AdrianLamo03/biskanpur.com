import NoticeBoardClient from "./NoticeBoardClient";
import prisma from "@/lib/prisma"; // Make sure this path is correct!

export default async function NoticeBoardPage() {
    // This will now throw a clear "missing env" error if the string is empty
    const notices = await prisma.notice.findMany({
        orderBy: { createdAt: 'desc' }
    });
    const keyDates = await prisma.keyDate.findMany({ orderBy: { createdAt: 'asc' } });

    return (
        <NoticeBoardClient
            initialNotices={JSON.parse(JSON.stringify(notices))}
            initialKeyDates={JSON.parse(JSON.stringify(keyDates))}
        />
    );
}