import { Link, useLocation } from "react-router";
import { ModeToggle } from "../mode-toggle";
import AddBookModal from "../module/books/AddBookModal";
import logo from "../../assets/logo.svg";
import { cn } from "@/lib/utils";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="flex justify-around items-center  border-b p-3">
      <div>
        <Link to="/">
          <img
            src={logo}
            alt=""
            className="w-22 md:w-44 h-auto dark:bg-gray-300"
          />
        </Link>
      </div>
      <ul className="flex items-center gap-2 md:gap-5">
        <li className="flex font-light text-gray-500 text-sm hover:text-blue-900">
          <AddBookModal />
        </li>
        <li
          className={cn(
            "font-light text-gray-500 text-sm hover:text-blue-900",
            {
              "text-blue-900": location.pathname === "/books",
            }
          )}
        >
          <Link to="/books">All Books</Link>
        </li>
        <li
          className={cn(
            "font-light text-gray-500 text-sm hover:text-blue-900",
            {
              "text-blue-900": location.pathname === "/borrow-summary",
            }
          )}
        >
          <Link to="/borrow-summary">Borrow Summary</Link>
        </li>
      </ul>
      <ModeToggle />
    </nav>
  );
};
export default Navbar;
