import { Link } from "react-router-dom";
import { navLinks } from "../constants";

export default function SideBar() {
  return (
    <aside className="fixed inset-x-0 md:inset-y-0 md:inset-x-auto start-0 bg-white/20 p-2 gap-1 flex md:flex-col m-2 rounded-lg backdrop-blur-md border-t border-r">
      {navLinks.map((item) => (
        <Link
          key={item.id}
          to={item.href}
          className={`group bg-blue-100 p-3 relative rounded-lg ${
            item.id === 0 && "me-auto md:mb-auto"
          }`}
        >
          <span className="*:size-5">{item.icon}</span>
          <span className="absolute invisible md:visible ms-0 left-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-white opacity-0 group-hover:opacity-100 group-hover:ms-5 transition-all duration-200 text-xs p-2 rounded-lg">
            {item.title}
          </span>
        </Link>
      ))}
    </aside>
  );
}
