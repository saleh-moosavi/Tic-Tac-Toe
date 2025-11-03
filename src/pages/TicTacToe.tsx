import Game from "../component/tic-tac-toe/Game";
import BlurBackGround from "../component/BlurBackGround";

export default function TicTacToe() {
  return (
    <section className="flex flex-col justify-center items-center w-screen h-screen">
      <BlurBackGround src="/tic-tac-toe.jpg" />
      <Game />
    </section>
  );
}
