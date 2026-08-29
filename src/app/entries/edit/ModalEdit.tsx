"use client";

import { useState } from "react";
import { updateEntry } from "@/app/actions";

export default function UpdateButton({ entry }: any) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
            >
                Update
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-semibold">
                                Update Entry
                            </h2>

                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="text-2xl text-gray-500 hover:text-gray-700"
                                aria-label="Close modal"
                            >
                                &times;
                            </button>
                        </div>

                        <form
                            action={updateEntry.bind(null, entry.id)}
                            className="space-y-4"
                        >
                            <div>
                                <label
                                    htmlFor="title"
                                    className="mb-1 block text-sm font-medium"
                                >
                                    Title
                                </label>

                                <input
                                    id="title"
                                    type="text"
                                    name="title"
                                    defaultValue={entry.title}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="content"
                                    className="mb-1 block text-sm font-medium"
                                >
                                    Content
                                </label>

                                <textarea
                                    id="content"
                                    name="content"
                                    defaultValue={entry.content}
                                    rows={6}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="flex justify-end gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-100"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
