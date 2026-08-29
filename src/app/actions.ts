"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache"; 

export async function createEntry(formData: FormData){
    await prisma.diaryEntry.create({
        data: {
            title: formData.get("title") as string,
            content: formData.get("content") as string,
        },
    });
    revalidatePath("/");
}

export async function getEntries(){
    return prisma.diaryEntry.findMany({
        orderBy: {createdAt:"desc"},
    });
}

export async function getEntry(id:string){
    return prisma.diaryEntry.findUnique({ where: { id } });
}

export async function updateEntry(id:string, formData: FormData){
    await prisma.diaryEntry.update({
        where:{ id },
        data:{
            title: formData.get("title") as string,
            content: formData.get("content") as string,
        },
    });
    revalidatePath("/");
}

export async function deleteEntry(id:string){
    await prisma.diaryEntry.delete({ where:{id}});
    revalidatePath("/");
}