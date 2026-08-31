import { createEntry } from "@/app/actions"
import Link from "next/link"

export default function New() {
    const date = new Date();
    const dateString = date.toLocaleDateString("en-US",{
        month: "long",
        day: "numeric",
        year:"numeric",
    });
    return (
        <div className="min-h-screen p-4 ml-[5vw]">
            <div className="mx-auto max-w-xl">
                <Link
                    href="/"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
                >
                    ← Back
                </Link>

                <div>
                    <div>
                        <h2 className="text-3xl text-center font-bold tracking-tight text-slate-900">
                            {dateString}
                        </h2>
                    </div>

                    <form action={createEntry} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <input
                                id="title"
                                type="text"
                                name="title"
                                placeholder="Give your day a title..."
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">                           
                            <textarea
                                id="content"
                                name="content"
                                placeholder="What happened today?"
                                rows={8}
                                className="italic"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-2 rounded-lg bg-yellow-200 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md active:scale-[0.98]"
                        >
                            Save Entry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
