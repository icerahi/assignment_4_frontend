import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import type { IBook } from "@/types";
import { DeleteIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router";
import { toast } from "sonner";

interface IProps {
  book: IBook;
}
export function DeleteBookModal({ book }: IProps) {
  const [open, setOpen] = useState(false);
  const [deleteBook] = useDeleteBookMutation();

  const location = useLocation();

  const deleteHandler = async () => {
    try {
      const res = await deleteBook(book).unwrap();

      toast.success(res.message);
      console.log(res);
      setOpen(false);
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="ignore-row-click " variant={"destructive"}>
          {location.pathname === "/books" ? <DeleteIcon /> : <TrashIcon />}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the book
            from our server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => deleteHandler()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
