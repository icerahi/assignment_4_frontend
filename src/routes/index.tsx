import App from "@/App";
import AddBookModal from "@/components/module/books/AddBookModal";
import Books from "@/pages/Books";
import BorrowSummary from "@/pages/BorrowSummary";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "books",
        Component: Books,
      },
      {
        path: "add-book",
        Component: AddBookModal,
      },
      {
        path: "borrow-summary",
        Component: BorrowSummary,
      },
    ],
  },
]);

export default router;
