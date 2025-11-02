import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen text-white bg-gradient-to-tr from-slate-700 to to-slate-900">
      <section className="p-5 w-1/3 bg-gradient-to-tr from-emerald-700 to-emerald-500 rounded-xl text-center">
        <h2 className="text-xl font-bold">Welcome to Here</h2>
        <h4 className="font-semibold text-sm">Choose One You Need</h4>
        <article className="mt-5">
          <Link to="/tic-tac-toe">Tic Tac Toe</Link>
        </article>
      </section>
    </div>
  );
}
