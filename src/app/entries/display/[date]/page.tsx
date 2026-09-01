type PageProps = {
    params: Promise<{
        date: string;
    }>;
};
import Link from "next/link";
import { getEntryByDate } from "@/app/actions";

export default async function HistoryDate({params,}:PageProps){
    const { date } = await params;
    const entries = await getEntryByDate(date);
    return(
        <div className="ml-[5vw]">
                <div>
                    <Link
                    href="/"
                    className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
                    >
                    ← Back
                </Link>
                </div>
                {entries && entries.length > 0 ?
                (
                    <div>
                    {entries.map((entry)=>(
                    <div key={entry.id}>
                        <h2 className="text-center text-2xl font-bold mb-4">{entry.title}</h2>
                        <p className="italic">
                            {entry.content}
                        </p>
                    </div>
                    ))}
                    </div>
                ) :
                (
                <div>
                    No entry for that day
                </div>
                )
                }
        </div>
    )
}