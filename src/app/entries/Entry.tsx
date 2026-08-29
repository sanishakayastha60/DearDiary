import Link from "next/link";

export default function Entry(){
    return(
        <div className="w-full min-h-screen flex justify-center items-center gap-4">
            <button className="p-2 border rounded-lg">
                <Link href="/entries/new">Write About Your Day!</Link>
            </button>
            <button className="p-2 border rounded-lg">
                <Link href="/entries/display">Explore your History</Link>
            </button>
        </div>
    )
}