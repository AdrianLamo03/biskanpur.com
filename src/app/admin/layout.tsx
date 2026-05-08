import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AdminSidebarWrapper from "./AdminSidebarWrapper"; // We'll create this next

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    // 1. Check session on the SERVER
    const session = await getServerSession();

    // 2. If no session, redirect to login immediately
    if (!session) {
        redirect('/login');
    }

    // 3. If session exists, render the layout
    return (
        <AdminSidebarWrapper>
            {children}
        </AdminSidebarWrapper>
    );
}