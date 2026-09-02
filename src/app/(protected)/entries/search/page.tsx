"use client";
import { useState, useRef } from "react";
import { Search } from "lucide-react"

interface Entry{
    id: string |number;
    title: string;
    content: string;
}

export default function SearchBar(){
    const [query, setQuery] = useState("");
    const [entries, setEntries] = useState<Entry[]>([]);
    const abortControllerRef = useRef<AbortController|null>(null);
    async function handleSearch(value:string){
        setQuery(value);
        if(abortControllerRef.current){
            abortControllerRef.current.abort();
        }
        if(!value.trim()){
            setEntries([]);
            return;
        }

        const controller = new AbortController();
        abortControllerRef.current = controller;
        try{
            const response = await fetch(`/api/entries/search?q=${encodeURIComponent(value)}`,{signal: controller.signal});

            if(!response.ok) return;

            const data = await response.json();
            setEntries(data);
        }catch(error:any){
            console.log("Error: ",error);
        }
    }
    return(
        <div className="ml-[10vw] w-[75%] h-full p-2 rounded-xl flex flex-col gap-2">
            <h1 className="text-2xl font-bold uppercase mt-8">Revisit a memory . . .</h1>
            <div className="mt-6 flex w-full max-w-xl items-center rounded-2xl border border-gray-400 px-4 py-2 shadow-sm transition-all focus-within:border-gray-600 focus-within:shadow-md">
            <Search
                width={20}
                height={20}
                className="mr-3 shrink-0 text-gray-400"
            />

            <input
                type="text"
                placeholder="Search through your memoirs..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-transparent py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
        </div>

            {entries.length > 0 && (
                <div>
                    {entries.map((entry)=>(
                        <div key ={entry.id}>
                            <h2> {entry.title} </h2>
                            <p> {entry.content} </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}