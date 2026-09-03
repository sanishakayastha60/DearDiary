import { Trash2Icon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function AlertDialogDestructive({action,}:{
    action: () =>void;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="destructive">Delete</Button>}
      />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete this diary entry. Are you sure?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
        <form action={action} className="flex-1">
            <AlertDialogAction variant="destructive" type="submit" className="w-full">Delete</AlertDialogAction>
        </form>
        </AlertDialogFooter>
      </AlertDialogContent>        
    </AlertDialog>
  )
}
