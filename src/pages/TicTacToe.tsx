import Card from "../component/Card";
import { useRef, useState } from "react";
import useTicTacToe from "../hooks/useTicTacToe";
import WinBackGround from "../component/WinBackGround";

export default function TicTacToe() {
  const [blocks, setBlocks] = useState<{ id: string }[]>(
    Array(9).fill({ id: "" }),
  );
  const player = useRef("X");
  const winner = useRef<string>("");
  const { clickHandler, resetGame } = useTicTacToe({
    blocks,
    setBlocks,
    player,
    winner,
  });

  return (
    <Card title="Tic Tac Toe" bgSrc="/tic-tac-toe.jpg">
      <article className="flex flex-col justify-center items-center gap-5">
        <div className="grid grid-rows-3 grid-cols-3 gap-3">
          {blocks.map((block, index: number) => {
            return (
              <div
                key={index}
                className="blockDiv text-5xl cursor-pointer w-20 h-20 bg-white rounded-lg transition-all duration-300 flex justify-center items-center"
                onClick={(e) => clickHandler(e, index)}
              >
                {block.id}
              </div>
            );
          })}
        </div>
        {winner.current === "" ? (
          <h3 className="text-white text-lg font-semibold">
            Your Turn : {player.current}
          </h3>
        ) : (
          <>
            <h3 className="text-white text-lg font-semibold">
              * {winner.current} * wins the game
            </h3>
            {winner.current !== "No One" && <WinBackGround />}
          </>
        )}
        <button
          className="text-white bg-rose-500 px-3 py-2 rounded-lg w-full font-semibold z-20"
          onClick={resetGame}
        >
          Reset
        </button>
      </article>
    </Card>
  );
}
