import BorrowSummaryTable from "@/components/module/books/BorrowSummaryTable";
import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";

const BorrowSummary = () => {
  const { data, error, isLoading } = useGetBorrowSummaryQuery(undefined, {
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
      <p>Borrow Summary</p>
      <div className="m-7">
        <BorrowSummaryTable data={data.data} />
      </div>
    </div>
  );
};
export default BorrowSummary;
