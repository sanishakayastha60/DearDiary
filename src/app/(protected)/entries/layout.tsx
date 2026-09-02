export default function EntriesLayout({
    children,
}:{
    children: React.ReactNode
}){
    return(
        <div>
            <main>{children}</main>
        </div>
    )
}