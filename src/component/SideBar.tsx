import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbNumbers, TbTicTac } from "react-icons/tb";

export default function SideBar() {
  return (
    <aside className="fixed inset-x-0 md:inset-y-0 md:inset-x-auto start-0 bg-white/20 p-2 gap-1 flex md:flex-col m-2 rounded-lg backdrop-blur-md border-t border-r">
      <Link
        to="/"
        className="group bg-blue-100 p-3 relative rounded-lg me-auto md:mb-auto"
      >
        <FaHome className="size-5" />
        <span className="absolute invisible md:visible ms-0 left-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-white opacity-0 group-hover:opacity-100 group-hover:ms-5 transition-all duration-200 text-xs p-2 rounded-lg">
          Home
        </span>
      </Link>
      <Link
        to="/tic-tac-toe"
        className="group bg-blue-100 p-3 relative rounded-lg"
      >
        <TbTicTac className="size-5" />
        <span className="absolute invisible md:visible ms-0 left-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-white opacity-0 group-hover:opacity-100 group-hover:ms-5 transition-all duration-200 text-xs p-2 rounded-lg">
          Tic-Tac-Toe
        </span>
      </Link>
      <Link
        to="/guess-number"
        className="group bg-blue-100 p-3 relative rounded-lg"
      >
        <TbNumbers className="size-5" />
        <span className="absolute invisible md:visible ms-0 left-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-white opacity-0 group-hover:opacity-100 group-hover:ms-5 transition-all duration-200 text-xs p-2 rounded-lg">
          Guess-The-Number
        </span>
      </Link>
    </aside>
  );
}
