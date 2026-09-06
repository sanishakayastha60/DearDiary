import { updateEntry, getEntry } from "@/app/actions";
import { Button } from "@/components/ui/button";

export default async function EditEntryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);
  const entry = await getEntry(id);

  if (!entry) {
    return <div>Entry not found</div>;
  }

  return (
    <div className="relative mx-auto ml-[5vw] max-w-2xl p-8">
      <h1 className="mb-6 text-2xl font-bold uppercase">Update Entry</h1>

      <form action={updateEntry.bind(null, entry.id)} className="space-y-4">
        <div>
          <input
            id="title"
            type="text"
            name="title"
            defaultValue={entry.title}
            className="uppercase w-full text-xl font-bold outline-none text-center"
          />
        </div>
        <div>
          <textarea
            id="content"
            name="content"
            defaultValue={entry.content}
            className="w-full mb-4 italic outline-none [field-sizing:content] "
          />
        </div>

        <Button
          variant="default"
          type="submit"
          className="absolute bottom-8 right-6 uppercase"
        >
          Save Changes
        </Button>
      </form>
    </div>
  );
}
