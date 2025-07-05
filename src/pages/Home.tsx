import Loader from "@/components/Loader";
import { genres } from "@/components/module/books/AddBookModal";
import BookCard from "@/components/module/home/BookCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/types";

const Home = () => {
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
    <div className="">
      <div className="flex flex-col justify-center font-sans items-center h-[200px] ">
        <h1 className="text-4xl font-extralight text-indigo-800 p-2 tracking-wider dark:text-white">
          Explore our collection
        </h1>
        <p className="font-extralight p-2 text-blue-900 tracking-wide font-sans text-md dark:text-white">
          There's someting for everybody
        </p>
      </div>
      <Tabs defaultValue="all" className="">
        <TabsList className="bg-transparent flex flex-wrap justify-center items-center mx-auto">
          {genres.map((genre) => (
            <TabsTrigger
              key={genre}
              className="border-blue-950 font-light text-md rounded-4xl px-4 uppercase text-blue-950 m-1"
              value={genre}
            >
              {genre}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-9 mx-10 my-20">
        {data?.data.map((book: IBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};
export default Home;
