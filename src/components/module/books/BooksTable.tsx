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
import type { IBook } from "@/types";
import { Book, Delete, DeleteIcon, Edit } from "lucide-react";

interface IProps {
  data: IBook[];
}
export function BooksTable({ data }: IProps) {
  return (
    <Table>
      <TableCaption>A list of Books</TableCaption>
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
          data.map((book: IBook) => (
            <TableRow key={book._id}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell className="font-medium">{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.copies}</TableCell>
              <TableCell>{book.available.toString()}</TableCell>
              <TableCell className="text-right">
                <div className="flex gap-2">
                  {" "}
                  <Button>
                    <Book />
                  </Button>
                  <Button variant={"outline"}>
                    <Edit />
                  </Button>
                  <Button variant={"destructive"}>
                    <Delete />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
export default BooksTable;
