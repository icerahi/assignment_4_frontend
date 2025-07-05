import Loader from "@/components/Loader";
import BooksTable from "@/components/module/books/BooksTable";
import { useGetBooksQuery } from "@/redux/api/baseApi";

const Books = () => {
  const { data, error, isLoading } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>Something went wrong! </p>;
  }

  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-white">
          All Books
        </h2>
        <p className="text-sm text-gray-600 mb-4 mx-2 dark:text-white">
          Below is a list of all the books currently in the system. You can
          view, borrow, edit, or remove books as needed.
        </p>
        <p className="text-sm text-muted-foreground">
          Tip: Click on a row to view more details about a book.
        </p>
      </div>

      <div className="w-4/5 mx-auto">
        <BooksTable data={data.data} />
      </div>
    </div>
  );
};
export default Books;
