import { getEntries } from "@/app/actions";
import Link from "next/link";
import EntryCard from "@/app/components/EntryCard";
export default async function Display() {
  const entries = await getEntries();
  return (
    <div className=" p-4 ml-[5vw]">
      <div className="mx-auto max-w-xl w-full min-w-0">
        <div className="mb-4 flex"></div>
        <div className="flex flex-col gap-4">
          <h2 className="w-full text-2xl font-bold uppercase">Your Memories</h2>
          {entries.length === 0 ? (
            <div>
              <h2 className="text-xl font-semibold text-slate-800">
                No entries yet
              </h2>
              <p className="mt-2 text-slate-500">
                Start writing about your day.
              </p>

              <Link
                href="/entries/new"
                className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
              >
                Create Entry
              </Link>
            </div>
          ) : (
            <div className="max-h-[450px] overflow-y-auto pr-2">
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  className="w-full min-w-0 overflow-hidden p-2 rounded-xl"
                >
                  <EntryCard info={entry} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
