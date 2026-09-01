import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest){
    const params = request.nextUrl.searchParams.get("q");
    if(params && params.length>0){        
    const entries = await prisma.diaryEntry.findMany({
        where:{
            OR:[
                {title: {contains: params, mode: "insensitive"}},
                {content: {contains: params, mode:"insensitive"}}
            ]
        }
    })
    return NextResponse.json(entries);
    }
}