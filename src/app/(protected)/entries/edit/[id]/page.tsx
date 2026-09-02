import { updateEntry, getEntry } from "@/app/actions";

export default async function EditEntryPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    console.log(id) 
    const entry = await getEntry(id);

    if (!entry) {
        return <div>Entry not found</div>;
    }

    return (
        <div className="mx-auto ml-[5vw] max-w-2xl p-8">
            <h1 className="mb-6 text-2xl font-bold">
                Update Entry
            </h1>

            <form
                action={updateEntry.bind(null, entry.id)}
                className="space-y-4"
            >
                <div>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        defaultValue={entry.title}
                    />
                </div>
                <div>
                    <textarea
                        id="content"
                        name="content"
                        defaultValue={entry.content}
                        rows={10}
                        className="w-full italic"
                    />
                </div>

                <button
                    type="submit"
                    className="rounded-md bg-yellow-200 p-2"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}
