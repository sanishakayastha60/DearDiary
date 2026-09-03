import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET(request: NextRequest){
    const session = await auth();
    if(!session?.user?.id){
        throw new Error("Unauthorized"); 
    }
    const params = request.nextUrl.searchParams.get("q");
    if(params && params.length>0){        
    const entries = await prisma.diaryEntry.findMany({
        where:{
            userId: session.user.id,
            OR:[
                {title: {contains: params, mode: "insensitive"}},
                {content: {contains: params, mode:"insensitive"}},
            ],
        },
    });
    return NextResponse.json(entries);
    }
}