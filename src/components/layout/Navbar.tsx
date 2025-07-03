import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";
import AddBookModal from "../module/books/AddBookModal";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 h-16">
      <div>
        <Link to="/">
          <h1 className="text-2xl">
            <span className="bg-red-600 py-1 px-2">Libary</span> Management
          </h1>
        </Link>
      </div>

      <div className="flex justify-around gap-3">
        <Link to="/books">All Books</Link>
        <AddBookModal />
        <Link to="/borrow-summary">Borrow Summary</Link>
      </div>

      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};
export default Navbar;
