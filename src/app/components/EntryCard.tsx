type Entry = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
};

import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { deleteEntry } from "../actions";
import DeleteButton from "./DeleteButton";
export default function EntryCard({ info }: { info: Entry }) {
  const dateString = info.createdAt.toISOString().split("T")[0];
  return (
    <Card className="w-full">
      <CardContent>
        <Collapsible>
          <CollapsibleTrigger className="group relative flex w-full items-center">
            <div className="text-left">
              <h2 className="text-base font-bold uppercase">{info.title}</h2>
              <br />
              <p>{dateString}</p>
            </div>
            <ChevronDown className="ml-auto shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 my-2 pt-0 text-sm">
            <hr />
            <div className="line-clamp-2 italic">{info.content}</div>
            <div className="flex gap-2">
              <Link
                href={`/entries/display/${dateString}`}
                className="bg-[#8B6F47] text-white rounded-lg px-2.5 py-1.5 hover:bg-[#8B6F47]/70 "
              >
                Read More
              </Link>
              <Link
                href={`/entries/edit/${info.id}`}
                className="bg-amber-200 rounded-lg px-2.5 py-1.5 hover:bg-amber-300"
              >
                Update
              </Link>
              <DeleteButton action={deleteEntry.bind(null, info.id)} />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
