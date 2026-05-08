'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateSettings(formData: FormData) {
    const campusStatus = formData.get('campusStatus') as string;
    const marqueeText = formData.get('marqueeText') as string;

    await prisma.siteSettings.upsert({
        where: { id: 'global' },
        update: { campusStatus, marqueeText },
        create: { id: 'global', campusStatus, marqueeText },
    });

    revalidatePath('/admin/settings');
    revalidatePath('/'); // Immediate update for the public site
}