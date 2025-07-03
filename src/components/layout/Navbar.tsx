import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";
import AddBookModal from "../module/books/AddBookModal";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 h-16">
      <div>
        <Link to="/">
          {" "}
          <span className="font-bold ml-2">Libary</span> Management
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
