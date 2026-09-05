import { auth } from "@/auth";
import CalendarFrame from "../../components/CalendarFrame";

export default async function Home(){
  const session = await auth();
  return(
    <div className="w-full h-full ml-[5vw] mt-2">
      <h2 className="font-bold text-2xl">Welcome, <span className="italic underline">{session?.user?.name}</span> !</h2>
      <CalendarFrame />
    </div>
  )
}