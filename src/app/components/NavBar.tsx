import Link from "next/link";
import { getEntryByDate } from "../actions";
export default async function NavBar(){
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    const entries = await getEntryByDate(dateString);
    const todayEntered = entries.length > 0;
    return(
        <div className="w-full px-[5vw] py-4 flex justify-between border border-b-[#78716c]">
            <div className="flex gap-4">
                <Link href="/home">Home</Link>
                <Link href={
                    todayEntered ? `entries/display/${dateString}`:
                    "/entries/new"
                }>Today</Link>
                <Link href="/entries/display">History</Link>
                <Link href="/entries/search">Search</Link>
            </div>
        </div>
    )
}