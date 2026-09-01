import { getEntries, deleteEntry } from "@/app/actions";
import Link from "next/link";

export default async function Display() {
    const entries = await getEntries();

    return (
        <div className=" p-4 ml-[5vw]">
            <div className="mx-auto max-w-xl w-full">
                <div className="mb-4 flex">
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="w-full text-2xl font-bold text-center">
                         Your Memories 
                     </h1>
                    <div className="w-full flex justify-center"> 
                    </div>
                    {entries.length === 0 ? (
                        <div>
                            <h2 className="text-xl font-semibold text-slate-800">
                                No entries yet
                            </h2>
                            <p className="mt-2 text-slate-500">
                                Start writing about your day.
                            </p>

                            <Link
                                href="/new"
                                className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
                            >
                                Create Entry
                            </Link>
                        </div>
                    ) : (
                        entries.map((entry) => (
                            <div
                                key={entry.id}
                                className="border border-black p-2 rounded-xl"
                            >
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-xl font-bold text-slate-900">
                                            {entry.title}
                                        </h3>

                                        <p className="mt-2 whitespace-pre-wrap break-words leading-7 text-slate-600">
                                            {entry.content}
                                        </p>
                                    </div>
                                    <div className="flex shrink-0 items-center gap-2">
                                        <Link
                                            href={`/entries/edit/${entry.id}`}
                                            className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-blue-600 transition hover:bg-blue-100"
                                        >
                                            Update
                                        </Link>

                                        <form
                                            action={deleteEntry.bind(
                                                null,
                                                entry.id
                                            )}
                                        >
                                            <button
                                                type="submit"
                                                className="rounded-lg bg-red-50 px-3 py-2 font-medium text-red-600 transition hover:bg-red-100"
                                            >
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
