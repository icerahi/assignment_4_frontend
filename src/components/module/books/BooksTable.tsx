import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IBook } from "@/types";

import EditBookModal from "./EditBookModel";
import { DeleteBookModal } from "./DeleteBookModal";
import BorrowBookModal from "./BorrowBookModal";
import BookDetailsModal from "./BookDetailsModal";
import { useAppDispatch } from "@/redux/hooks";
import { showBookDetails } from "@/redux/features/book/BookSlice";

interface IProps {
  data: IBook[];
}
export function BooksTable({ data }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <Table>
      <TableCaption>A list of Books</TableCaption>
      <BookDetailsModal />
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Genre</TableHead>
          <TableHead>ISBN</TableHead>
          <TableHead>Copies</TableHead>
          <TableHead>Availability</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((book: IBook, index) => (
            <TableRow
              role="button"
              tabIndex={index}
              className="cursor-pointer"
              onClick={() => {
                //handle row click
                dispatch(showBookDetails(book));
              }}
              key={book._id}
            >
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.copies}</TableCell>
              <TableCell>
                {book.available ? "available" : "unavailable"}
              </TableCell>
              <TableCell
                onClick={(e) => e.stopPropagation()}
                className="text-right"
              >
                <div className="flex gap-2">
                  {" "}
                  <BorrowBookModal book={book} />
                  <EditBookModal book={book} />
                  <DeleteBookModal book={book} />
                </div>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
export default BooksTable;
