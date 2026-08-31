import Link from "next/link";
import { Search } from "lucide-react";
export default function NavBar(){
    return(
        <div className="w-full px-[5vw] py-4 flex justify-between border border-b-[#78716c]">
            <div className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/entries/new">Today</Link>
                <Link href="/entries/display">History</Link>
            </div>
            <div>
                <Link href="/entries/display"><Search /></Link>
            </div>
        </div>
    )
}