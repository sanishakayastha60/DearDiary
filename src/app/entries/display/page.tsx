import { getEntries, deleteEntry } from "@/app/actions";
import Edit from "../edit/ModalEdit";
import Link from "next/link";

export default async function Display() {
    const entries = await getEntries();

    return (
        <div className="min-h-screen px-4 py-10">
            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">

                    <Link
                    href="/"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
                >
                    ← Back
                </Link>
                </div>

                {/* Entries */}
                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            My Journal
                        </h1>
                    </div>
                    {entries.length === 0 ? (
                        <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
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
                                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
                            >
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                    {/* Entry content */}
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-xl font-bold text-slate-900">
                                            {entry.title}
                                        </h3>

                                        <p className="mt-2 whitespace-pre-wrap break-words leading-7 text-slate-600">
                                            {entry.content}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex shrink-0 items-center gap-2">
                                        <div className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-blue-600 transition hover:bg-blue-100">
                                            <Edit entry={entry} />
                                        </div>

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
