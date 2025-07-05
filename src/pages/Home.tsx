import Loader from "@/components/Loader";
import { genres } from "@/components/module/books/AddBookModal";
import BookCard from "@/components/module/home/BookCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
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

  const genreList = ["All", ...genres];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col justify-center font-sans items-center md:h-[200px] ">
        <h1 className="text-2xl md:text-4xl font-extralight text-indigo-800 p-2 tracking-wider uppercase dark:text-white">
          Explore our collection
        </h1>
        <p className="font-extralight uppercase  text-blue-900 tracking-wide font-sans text-sm dark:text-white">
          There's something for everybody
        </p>
      </div>
      <div>
        <Tabs defaultValue="all">
          <TabsList className="bg-transparent flex flex-wrap justify-center items-center mx-auto">
            {genreList.map((genre) => (
              <TabsTrigger
                key={genre}
                className={cn(
                  "border-blue-950 hover:bg-blue-950 cursor-pointer hover:text-gray-300 font-light text-md rounded-4xl px-4 uppercase text-blue-950 m-1",
                  {
                    "bg-blue-950 text-gray-300":
                      genre.toLocaleLowerCase() === "all",
                  }
                )}
                value={genre}
              >
                {genre}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-9 mx-10 my-20">
        {data?.data.map((book: IBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};
export default Home;
