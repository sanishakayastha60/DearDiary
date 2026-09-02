import SignInButton from "./components/SignInButton"
import Link from "next/link"
export default function App(){
    return(
        <div className="ml-[5vw]">
            <SignInButton/>
            <Link href="/auth/signup">SignUp</Link>
        </div>
    )
}