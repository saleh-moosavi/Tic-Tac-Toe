import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="fixed inset-y-0 start-0 bg-white p-5 flex flex-col gap-5">
      <Link to="/">Home</Link>
      <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
      <Link to="/guess-number">Guess-Number</Link>
    </aside>
  );
}
