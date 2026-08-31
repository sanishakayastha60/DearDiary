type PageProps = {
    params: Promise<{
        date: string;
    }>;
};

import { getEntryByDate } from "@/app/actions";
export default async function HistoryDate({params,}:PageProps){
    const { date } = await params;
    const entries = await getEntryByDate(date);
    return(
        <div className="mx-[5vw]">
            <h1>
                date
                {entries.map((entry)=>(
                    <div>
                        {entry.title}
                        {entry.content}
                    </div>
                ))}
            </h1>
        </div>
    )
}