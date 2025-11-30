import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import styles from "./SideBar.module.scss";

export default function SideBar() {
  return (
    <aside className={styles.aside}>
      {navLinks.map((item) => (
        <Link
          key={item.id}
          to={item.href}
          className={`group bg-blue-100 p-3 relative rounded-lg ${
            item.id === 0 && "me-auto md:mb-auto"
          }`}
        >
          <span className="*:size-5">{item.icon}</span>
          <span className={styles.tooltip}>{item.title}</span>
        </Link>
      ))}
    </aside>
  );
}
