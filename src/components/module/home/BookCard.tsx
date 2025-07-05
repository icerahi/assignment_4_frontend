import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { showBookDetails } from "@/redux/features/book/BookSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { IBook } from "@/types";

import BorrowBookModal from "../borrow/BorrowBookModal";
import EditBookModal from "../books/EditBookModel";
import { DeleteBookModal } from "../books/DeleteBookModal";

interface IProps {
  book: IBook;
}
const BookCard = ({ book }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border-1 border-t-0 shadow-lg p-3 relative">
      <p
        className={cn(
          "absolute px-2 rounded-lg -top-3 -right-2 text-gray-900 font-thin uppercase",
          {
            " bg-green-500": book.available,
            " bg-red-500": !book.available,
          }
        )}
      >
        {book.available ? "available" : "unavailable"}
      </p>
      <div className="text-center">
        <h1 className="text-2xl">{book.title}</h1>
        <p className="my-4 mx-2 font-mono">{book.description.slice(0, 50)}</p>
        <p>
          {" "}
          <span className="font-bold">ISBN:</span>
          {book.isbn}
        </p>
        <p>
          <span className="font-bold">Author:</span> {book.author}
        </p>
        <p>
          <span className="font-bold">Genre:</span> {book.genre}
        </p>

        <p>
          <span className="font-bold">Copies:</span> {book.copies}
        </p>
      </div>

      <div className="mt-4 flex justify-between gap-2">
        <div className="flex gap-2">
          <BorrowBookModal book={book} />

          <Button
            onClick={() => dispatch(showBookDetails(book))}
            variant={"outline"}
          >
            Details
          </Button>
        </div>
        <div className="flex gap-2">
          <EditBookModal book={book} />
          <DeleteBookModal book={book} />
        </div>
      </div>
    </div>
  );
};
export default BookCard;
