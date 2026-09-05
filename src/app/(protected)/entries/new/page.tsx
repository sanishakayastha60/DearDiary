import { createEntry } from "@/app/actions"
import Link from "next/link"
import { Button } from "@/components/ui/button";

export default function New() {
    const date = new Date();
    const dateString = date.toLocaleDateString("en-US",{
        month: "long",
        day: "numeric",
        year:"numeric",
    });
    return (
        <div className="p-4 ml-[5vw]">
            <div className="mx-auto max-w-xl">
                {/* <Link
                    href="/"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
                >
                     Back
                </Link> */}

                <div>
                    <div>
                        <h2 className="text-3xl text-center font-bold tracking-tight text-slate-900 mb-3">
                            {dateString}
                        </h2>
                    </div>

                    <form action={createEntry} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <input
                                id="title"
                                autoFocus
                                type="text"
                                name="title"
                                placeholder="Give your day a title . . ."
                                className="outline-none text-xl font-bold text-foreground"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">                           
                            <textarea
                                id="content"
                                name="content"
                                placeholder="What happened today?"
                                rows={8}
                                className="italic outline-none font-medium"
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="default"
                            className="absolute bottom-8 right-6 uppercase"                         
                        >
                            Save Entry
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
