import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import { useAddBookMutation, useBorrowBookMutation } from "@/redux/api/baseApi";
import type { IBook } from "@/types";
import { BookIcon, CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

const borrowBookSchema = z.object({
  quantity: z.preprocess((value) => {
    return Number(value);
  }, z.number().min(1, "Quantity should be a positive number")),
  dueDate: z.date(),
});

interface IProps {
  book: IBook;
}
export default function BorrowBookModal({ book }: IProps) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(borrowBookSchema),
    defaultValues: {
      quantity: "",
      dueDate: new Date(),
    },
  });

  const [borrowBook, result] = useBorrowBookMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    console.log(values);
    try {
      if (book.copies >= values.quantity) {
        const borrowData = { ...values, book: book._id };
        const res = await borrowBook(borrowData).unwrap();

        toast.success(res.message);
        console.log(res);
        setOpen(false);
        form.reset();
        navigate("/borrow-summary");
      } else {
        toast.error("Quantity cannot exceed available copies!");
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button>
            <BookIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center"> Borrow a Book</DialogTitle>
            <h1 className="mt-2">
              Book Title: <span className="italic">{book.title}</span>
            </h1>
          </DialogHeader>
          <Form {...form}>
            <form
              className="flex flex-col gap-2"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        value={
                          typeof field.value === "string" ? field.value : ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Due Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
}
