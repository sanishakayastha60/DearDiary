
 type Entry = {
    id: string;
    title:string;
    content: string;
    createdAt: Date;
 };

import { ChevronDown } from "lucide-react" 
import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { deleteEntry } from "../actions";
import DeleteButton from "./DeleteButton";
export default function EntryCard({info,}:{info:Entry}) {
    const dateString = info.createdAt.toISOString().split("T")[0]; 
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardContent>
        <Collapsible className="rounded-md data-open:bg-muted">
          <CollapsibleTrigger className="w-full">
            {dateString}
            <br/>
            {info.title}
                <ChevronDown className="ml-auto group-data-panel-open/button:rotate-180" />
                </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
            <div className="line-clamp-2">
              {info.content}
            </div>
            <Link href={`/entries/display/${dateString}`}>Read More</Link>
            <Link href={`/entries/edit/${info.id}`}>Update</Link>
            <DeleteButton action={deleteEntry.bind(
                null, info.id,
            )}/>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
