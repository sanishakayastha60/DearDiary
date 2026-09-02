import { auth } from "@/auth";
import SignInButton from "./components/SignInButton";
import SignOutButton from "./components/SignOutButton";
import { redirect } from "next/navigation";
export default async function App(){
    const session = await auth();
    if(session?.user){
        redirect("/home")
    }
    return(
        <main className="ml-[5vw]">
            {session?.user ? (
                <SignOutButton/>
            ): (
                <SignInButton/>
            )}
        </main>
    )
}