import App from "@/App";
import AddBookModal from "@/components/module/books/AddBookModal";
import Books from "@/pages/Books";
import BorrowSummary from "@/pages/BorrowSummary";
import Home from "@/pages/Home";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "books",
        Component: Books,
      },

      {
        path: "borrow-summary",
        Component: BorrowSummary,
      },
    ],
  },
]);

export default router;
