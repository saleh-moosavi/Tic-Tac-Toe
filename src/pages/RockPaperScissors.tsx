import BlurBackGround from "../component/BlurBackGround";

export default function RockPaperScissors() {
  return (
    <section className="flex flex-col justify-center items-center gap-5 h-screen text-white">
      <BlurBackGround src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckX8P9E-Z-50acV3B6PWXeNHD9pdExIJipg&s" />
      <article className="bg-black/50 border p-10 rounded-xl shadow-md shadow-cyan-200">
        Choose Your Hand
      </article>

      <article className="bg-black/50 border p-10 rounded-xl shadow-md shadow-cyan-200">
        How Many Round ?
      </article>
    </section>
  );
}
