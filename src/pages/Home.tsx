import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import BlurBackGround from "../component/BlurBackGround";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen text-white">
      <BlurBackGround src="/home.jpeg" />
      <section className="p-2 md:p-5 w-3/4 md:w-1/2 lg:w-1/3 bg-gradient-to-tr from-rose-600 to-blue-600 rounded-xl text-center">
        <h2 className="md:text-xl font-bold">Welcome to Hobby Verse</h2>
        <article className="mt-5 flex justify-between gap-5">
          {navLinks.map((item) =>
            item.id === 0 ? null : (
              <Link
                key={item.id}
                to={item.href}
                className="hover:bg-yellow-400 hover:text-black transition-all duration-200 px-4 py-2 border rounded-lg text-xs md:text-sm whitespace-nowrap"
              >
                {item.title}
              </Link>
            )
          )}
        </article>
      </section>
    </div>
  );
}
