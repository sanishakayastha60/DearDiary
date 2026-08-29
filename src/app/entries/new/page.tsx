import { createEntry } from "@/app/actions"
import Link from "next/link"

export default function New() {
    return (
        <div className="min-h-screen px-4 py-10">
            <div className="mx-auto max-w-xl">
                <Link
                    href="/"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
                >
                    ← Back
                </Link>

                <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                            How did your day go?
                        </h2>
                    </div>

                    <form action={createEntry} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="title"
                                className="text-sm font-semibold text-slate-700"
                            >
                                Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                name="title"
                                placeholder="Give your day a title..."
                                className="rounded-lg border border-slate-300 bg-slate-50 p-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="content"
                                className="text-sm font-semibold text-slate-700"
                            >
                                Your thoughts
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                placeholder="What happened today?"
                                rows={8}
                                className="resize-none rounded-lg border border-slate-300 bg-slate-50 p-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md active:scale-[0.98]"
                        >
                            Save Entry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
