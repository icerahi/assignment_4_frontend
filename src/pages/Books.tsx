import BooksTable from "@/components/module/books/BooksTable";
import { useGetBooksQuery } from "@/redux/api/baseApi";

const Books = () => {
  const { data, error, isLoading } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>Something went wrong! </p>;
  }

  return (
    <div>
      <p>Books</p>
      <div className="m-7">
        <BooksTable data={data.data} />
      </div>
    </div>
  );
};
export default Books;
