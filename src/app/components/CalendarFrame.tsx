"use client";
import { Calendar } from "@/components/ui/calendar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getEntryByDate } from "../actions";

export default function CalendarFrame(){
    const router = useRouter();
    const [date, setDate] = useState<Date|undefined>();

    function formatLocalDate(date: Date | undefined){
    const year = date?.getFullYear();
    const month = String(date?.getMonth()+1).padStart(2,"0");
    const day = String(date?.getDate()).padStart(2,"0");
    return `${year}-${month}-${day}`;
}

    async function handleSetDate(date: Date | undefined){
        setDate(date);
        if(!date) return;
        const today = new Date();
        const dateString = formatLocalDate(date);
        const isToday = date.getDate() === today.getDate() && date.getMonth()===today.getMonth() && date.getFullYear() === today.getFullYear();
        if(isToday){
            const entry = await getEntryByDate(dateString);
            if(entry.length<1){
                router.push("/entries/new");
            }else{
                router.push(`entries/display/${dateString}`)
            }
        }else{
            router.push(`/entries/display/${dateString}`)
        }
    }
    return(
        <div className="w-full h-full min-w-0 min-h-0 flex justify-center ml-[-5vw]">
            <Calendar mode="single" selected={date} onSelect={handleSetDate} disabled={{after: new Date()}} className="w-full h-full max-w-[70%] max-h-[50%] lg:w-[50%] lg:h-[50%] bg-transparent"/>
        </div>
    )
}