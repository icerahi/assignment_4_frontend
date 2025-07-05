import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";

import { Toaster } from "./components/ui/sonner";
import Footer from "./components/layout/Footer";
import BookDetailsModal from "./components/module/books/BookDetailsModal";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <hr />
      <main className="flex-grow my-10">
        <Outlet />
      </main>
      <Footer />
      <BookDetailsModal />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
