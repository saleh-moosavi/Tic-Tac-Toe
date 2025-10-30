import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="grid justify-center items-center w-screen h-screen bg-gray-900 text-white">
      <p>Home</p>
      <Link to="/tic-tac-toe">Tic Tac Toe</Link>
    </div>
  );
}
