import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IBorrowSummary } from "@/types";

interface IProps {
  data: IBorrowSummary[];
}
export function BorrowSummaryTable({ data }: IProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Book Title</TableHead>

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
