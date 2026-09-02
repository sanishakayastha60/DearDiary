import { auth } from "@/auth";
import CalendarFrame from "../../components/CalendarFrame";

export default async function Home(){
  const session = await auth();
  return(
    <div className="w-full h-full ml-[5vw]">
      <h2>Welcome, {session?.user?.name}</h2>
      <CalendarFrame />
    </div>
  )
}