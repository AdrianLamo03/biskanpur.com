'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addNotice(formData: FormData) {
    const title = formData.get('title') as string;
    const date = formData.get('date') as string;
    const type = formData.get('type') as string;
    const description = formData.get('description') as string;

    await prisma.notice.create({
        data: { title, date, type, description }
    });

    revalidatePath('/admin/notices');
    revalidatePath('/'); // Updates the homepage Pulse section
}

export async function addKeyDate(formData: FormData) {
    const title = formData.get('title') as string;
    const date = formData.get('date') as string;

    await prisma.keyDate.create({
        data: { title, date }
    });

    revalidatePath('/admin/notices');
}

export async function deleteNotice(id: string) {
    await prisma.notice.delete({ where: { id } });
    revalidatePath('/admin/notices');
}

export async function deleteKeyDate(id: string) {
    await prisma.keyDate.delete({ where: { id } });
    revalidatePath('/admin/notices');
}