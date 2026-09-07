import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Quote from "./components/Quote";
export default async function App() {
  const session = await auth();
  if (session?.user?.id) {
    redirect("/home");
  }
  return (
    <main className="ml-[5vw]">
      <Quote />
    </main>
  );
}
