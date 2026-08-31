"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache"; 
import { redirect } from "next/navigation";

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
    return prisma.diaryEntry.findUnique({ where: 
        {
             id : id, 
        } });
}

export async function getEntryByDate(date: string){
     const start = new Date(`${date}T00:00:00`);
     const end = new Date(start);
     end.setDate(end.getDate()+1)
     return prisma.diaryEntry.findMany({
        where: {
            createdAt: {
                gte: start,
                lte: end,
            },
         },
         orderBy: {
            createdAt: "desc",
         },
     });
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
    redirect("/");
}

export async function deleteEntry(id:string){
    await prisma.diaryEntry.delete({ where:{id}});
    revalidatePath("/");
}