import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IBook, IBorrowSummary } from "@/types";
import {
  Book,
  BookIcon,
  Delete,
  DeleteIcon,
  Edit,
  EditIcon,
} from "lucide-react";
import EditBookModal from "./EditBookModel";
import { DeleteBookModal } from "./DeleteBookModal";
import BorrowBookModal from "./BorrowBookModal";

interface IProps {
  data: IBorrowSummary[];
}
export function BorrowSummaryTable({ data }: IProps) {
  return (
    <Table>
      <TableCaption>A list of Books Borrow Summary</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>

          <TableHead>ISBN</TableHead>
          <TableHead>Total Quantity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((book: IBorrowSummary) => (
            <TableRow key={book.book.isbn}>
              <TableCell className="font-medium">{book.book.title}</TableCell>

              <TableCell>{book.book.isbn}</TableCell>
              <TableCell>{book.totalQuantity}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
export default BorrowSummaryTable;
