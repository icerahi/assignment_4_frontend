import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";
import AddBookModal from "../module/books/AddBookModal";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="flex justify-around items-center  border-b p-3">
      <div>
        <Link to="/">
           
          <img src={logo} alt="" className="w-44 h-auto" />
        </Link>
      </div>
      <ul className="flex gap-5">
        <li className="flex font-light text-gray-500">
          <AddBookModal />
        </li>
        <li className="font-light text-gray-500">
          <Link to="/books">All Books</Link>
        </li>
        <li className="font-light text-gray-500">
          <Link to="/borrow-summary">Borrow Summary</Link>
        </li>
      </ul>
      <ModeToggle />
    </nav>
  );
};
export default Navbar;
