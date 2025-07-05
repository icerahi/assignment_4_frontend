import {
  Table,
  TableBody,
 
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IBook } from "@/types";

import EditBookModal from "./EditBookModel";
import { DeleteBookModal } from "./DeleteBookModal";
import BorrowBookModal from "../borrow/BorrowBookModal";
 
import { useAppDispatch } from "@/redux/hooks";
import { showBookDetails } from "@/redux/features/book/BookSlice";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IProps {
  data: IBook[];
}
export function BooksTable({ data }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
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
                <div className="flex gap-1 ">
                  {" "}
                  <Tooltip>
                    <TooltipTrigger>
                      <BorrowBookModal book={book} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Borrow Book</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <EditBookModal book={book} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit Book</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <DeleteBookModal book={book} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete Book</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
export default BooksTable;
