"use client";
import { Calendar } from "@/components/ui/calendar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CalendarFrame(){
    const router = useRouter();
    const [date, setDate] = useState<Date|undefined>();
    function handleSetDate(date: Date | undefined){
        setDate(date);
        if(!date) return;
        const today = new Date();
        const dateString = date.toISOString().split("T")[0];
        if(date?.getDay() === today.getDay() && date.getMonth()===today.getMonth() && date.getFullYear() === today.getFullYear()){
            router.push("/entries/new");
        }else{
            router.push(`/entries/display/${dateString}`)
        }
    }
    return(
        <div className="w-full h-full flex justify-center items-center">
            <Calendar mode="single" selected={date} onSelect={handleSetDate} disabled={{after: new Date()}}/>
        </div>
    )
}