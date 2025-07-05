import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
 
  DialogFooter,
  DialogHeader,
  DialogTitle,
 
} from "@/components/ui/dialog";
 
import { cn } from "@/lib/utils";
import { closeBookDetails, selectBook } from "@/redux/features/book/BookSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function BookDetailsModal() {
  const { selectedBook: book, bookDetailsModalOpen } =
    useAppSelector(selectBook);
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={bookDetailsModalOpen}
      onOpenChange={() => dispatch(closeBookDetails())}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Book Details</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <p>
              {" "}
              <span className="font-extrabold">Title:</span>{" "}
              <em>{book?.title}</em>
            </p>
            <p>
              {" "}
              <span className="font-extrabold">Author:</span>{" "}
              <em>{book?.author}</em>
            </p>
            <p>
              {" "}
              <span className="font-extrabold">Genre:</span>{" "}
              <em>{book?.genre}</em>
            </p>
            <p>
              {" "}
              <span className="font-extrabold">ISBN:</span>{" "}
              <em>{book?.isbn}</em>
            </p>
            <p>
              {" "}
              <span className="font-extrabold">Description:</span>{" "}
              <em>{book?.description}</em>
            </p>
            <p>
              {" "}
              <span className="font-extrabold">Copies:</span>{" "}
              <em className=""> {book?.copies}</em>
              <span
                className={cn("mx-1", {
                  "text-green-500": book?.available,
                  "text-red-500": !book?.available,
                })}
              >
                [{book?.available ? "available" : "unavailable"}]
              </span>
            </p>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose className="ml-auto" asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
