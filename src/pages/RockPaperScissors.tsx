import BlurBackGround from "../component/BlurBackGround";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";

export default function RockPaperScissors() {
  return (
    <section className="flex flex-col justify-center items-center gap-5 h-screen text-white">
      <BlurBackGround src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckX8P9E-Z-50acV3B6PWXeNHD9pdExIJipg&s" />
      <article className="space-y-5 min-w-60 bg-blue-950/50 border p-5 rounded-xl">
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-center">
            Rock . Paper . Scissors
          </h2>
          <article className="flex justify-between items-center gap-2 text-white hover:*:text-yellow-500 *:cursor-pointer *:p-2 *:bg-white/20 *:rounded-lg">
            <span className="*:size-8 transition-all duration-200">
              <FaHandRock />
            </span>
            <span className="*:size-8 transition-all duration-200">
              <FaHandPaper />
            </span>
            <span className="*:size-8 transition-all duration-200">
              <FaHandScissors />
            </span>
          </article>
          <div className="flex justify-between items-center">
            <span className="w-20 aspect-square inline-block bg-gradient-to-tr from-blue-500 to-pink-500 rounded-lg animate-pulse"></span>
            <span className="font-bold text-lg">VS</span>
            <span className="w-20 aspect-square inline-block bg-gradient-to-tr from-blue-500 to-pink-500 rounded-lg animate-pulse"></span>
          </div>
        </section>

        <hr />
        <section className="flex justify-between items-center gap-5">
          <p>How Many Round ?</p>
          <input
            type="number"
            min={1}
            defaultValue={3}
            className="p-1 text-black rounded-lg inline-block w-12 appearance-none text-center border-none outline-none"
          />
        </section>
        <button className="w-full text-center bg-gradient-to-r from-pink-600 to-blue-600 py-2 rounded-lg">
          Play
        </button>
      </article>
    </section>
  );
}
