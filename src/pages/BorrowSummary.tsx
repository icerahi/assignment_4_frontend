import Loader from "@/components/Loader";
import BorrowSummaryTable from "@/components/module/borrow/BorrowSummaryTable";
import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";

const BorrowSummary = () => {
  const { data, error, isLoading } = useGetBorrowSummaryQuery(undefined, {
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
          Borrow Summary
        </h2>
        <p className="text-sm text-gray-600 mb-4 dark:text-white">
          A summary of borrowed books, showing the title, ISBN, and total
          quantity borrowed.
        </p>
      </div>

      <div className="w-4/5 mx-auto">
        <BorrowSummaryTable data={data.data} />
      </div>
    </div>
  );
};
export default BorrowSummary;
