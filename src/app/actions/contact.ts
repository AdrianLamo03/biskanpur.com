'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitInquiry(formData: FormData) {
    const type = formData.get('type') as string;
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string || null;
    const grade = formData.get('grade') as string || null;
    const position = formData.get('position') as string || null;
    const message = formData.get('message') as string;

    try {
        await prisma.inquiry.create({
            data: {
                type,
                name,
                phone,
                email,
                grade,
                position,
                message,
                status: "PENDING"
            }
        });

        revalidatePath('/admin/inbox');
        return { success: true };
    } catch (error) {
        console.error("Submission Error:", error);
        return { success: false };
    }
}