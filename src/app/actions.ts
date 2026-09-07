"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

async function getCurrentUser() {
  const session = await auth();
  return session?.user ?? null;
}

async function requireCurrentUser() {
  const user = await getCurrentUser();
  if (!user?.id) {
    throw new Error("Unauthorized");
  }
  return user.id;
}

export async function createEntry(formData: FormData) {
  const userId = await requireCurrentUser();
  const entry = await prisma.diaryEntry.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      userId: userId,
    },
  });
  revalidatePath("/");
  redirect(`/entries/display/${entry.createdAt.toISOString().split("T")[0]}`);
}

export async function getEntries() {
  const userId = await requireCurrentUser();
  return prisma.diaryEntry.findMany({
    where: { userId: userId },
    orderBy: { createdAt: "desc" },
  });
}

export async function getEntry(id: string) {
  const userId = await requireCurrentUser();
  return prisma.diaryEntry.findFirst({
    where: {
      id,
      userId: userId,
    },
  });
}

export async function getEntryByDate(date: string) {
  const userId = await requireCurrentUser();
  const start = new Date(`${date}T00:00:00`);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);
  return prisma.diaryEntry.findMany({
    where: {
      createdAt: {
        gte: start,
        lt: end,
      },
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function updateEntry(id: string, formData: FormData) {
  const userId = await requireCurrentUser();
  const entry = await prisma.diaryEntry.findFirst({
    where: { id, userId: userId },
  });
  if (!entry) {
    throw new Error("Diary entry not found");
  }
  await prisma.diaryEntry.update({
    where: {
      id: entry.id,
    },
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    },
  });
  revalidatePath("/");
  redirect("/");
}

export async function deleteEntry(id: string) {
  const userId = await requireCurrentUser();
  const entry = await prisma.diaryEntry.findFirst({
    where: {
      id,
      userId: userId,
    },
  });
  if (!entry) {
    throw new Error("Diary entry not found");
  }
  await prisma.diaryEntry.delete({ where: { id } });
  revalidatePath("/");
}
