export default function Frame({children,}:{
    children: React.ReactNode;
}){
    return (
        <div className="relative w-full min-h-screen flex justify-center items-center">
            <div className="relative w-[60%] h-[75vh] bg-white/90 rounded-xl">
                <div className="absolute inset-0 z-50 w-[4vw] h-full bg-[#7c2d12] rounded-l-xl"/>
                <div className="relative bg-[#F7F2EA] rounded-xl w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}