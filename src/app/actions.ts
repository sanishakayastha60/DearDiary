"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache"; 
import { redirect } from "next/navigation";
import { auth } from "@/auth";

async function getCurrentUser(){
    const session = await auth();
    return session?.user ?? null;
}

async function requireCurrentUser(){
    const user = await getCurrentUser();
    if(!user?.id){
        return [];
    }
    return user;
}

export async function createEntry(formData: FormData){
    const user = await requireCurrentUser();
    await prisma.diaryEntry.create({
        data: {
            title: formData.get("title") as string,
            content: formData.get("content") as string,
            userId: user.id,
        },
    });
    revalidatePath("/");
}

export async function getEntries(){
    const user = await requireCurrentUser();
    return prisma.diaryEntry.findMany({
        where: {userId: user.id,},
        orderBy: {createdAt:"desc"},
    });
}

export async function getEntry(id:string){
    const user = await requireCurrentUser();
    return prisma.diaryEntry.findFirst({ where: 
        {
            id, 
            userId: user.id,
        } });
}

export async function getEntryByDate(date: string){
    const user = await requireCurrentUser();
     const start = new Date(`${date}T00:00:00`);
     const end = new Date(start);
     end.setDate(end.getDate()+1)
     return prisma.diaryEntry.findMany({
        where: {
            createdAt: {
                gte: start,
                lt: end,
            },
            userId: user.id,
         },
         orderBy: {
            createdAt: "desc",
         },
     });
}

export async function updateEntry(id:string, formData: FormData){
    const user = await requireCurrentUser();
    const entry =  await prisma.diaryEntry.findFirst({
        where:{ id , userId: user.id,},
    });
   if(!entry){
    throw new Error("Diary entry not found");
   }
   await prisma.diaryEntry.update({
    where:{
        id: entry.id,
    },
    data:{
        title: formData.get("title") as string,
        content: formData.get("content") as string,
    },
   });
    revalidatePath("/");
    redirect("/");
}

export async function deleteEntry(id:string){
    const user = await requireCurrentUser();
    const entry = await prisma.diaryEntry.findFirst({
        where:{
            id,
            userId: user.id,
        },
    });
    if(!entry){
        throw new Error("Diary entry not found");
    }
    await prisma.diaryEntry.delete({ where:{id}});
    revalidatePath("/");
}