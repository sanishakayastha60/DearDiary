import Link from "next/link"
export default function EntriesLayout({
    children,
}:{
    children: React.ReactNode
}){
    return(
        <div>
            <nav>
                <Link href="/">Today</Link>
            </nav>
            <main>{children}</main>
        </div>
    )
}