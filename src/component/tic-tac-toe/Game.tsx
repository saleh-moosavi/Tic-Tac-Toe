import Block from "./Block";
import { useRef, useState } from "react";
import WinBackGround from "../WinBackGround";
import useClick from "../../hooks/tic-tac-toe/useClick";
import useReset from "../../hooks/tic-tac-toe/useReset";

export default function Game() {
  const [blocks, setBlocks] = useState<{ id: string }[]>(
    Array(9).fill({ id: "" })
  );
  const player = useRef("X");
  const winner = useRef<string>("");
  const { resetGame } = useReset({ blocks, setBlocks, player, winner });
  const { clickHandler } = useClick({ blocks, setBlocks, player, winner });

  return (
    <article className="flex flex-col justify-center items-center">
      {winner.current === "" ? (
        <h3 className="text-white mb-10 text-xl">
          Your Turn : {player.current}
        </h3>
      ) : (
        <>
          <h3 className="text-white mb-10 text-xl">
            * {winner.current} * wins the game
          </h3>
          {winner.current !== "No One" && <WinBackGround />}
        </>
      )}
      <div className="grid grid-rows-3 grid-cols-3 gap-3">
        {blocks.map((block, index: number) => {
          return (
            <Block
              key={index}
              id={index}
              value={block.id}
              handler={clickHandler}
            />
          );
        })}
      </div>
      <button
        className="text-white bg-rose-500 px-3 py-2 rounded-lg mt-5 w-full font-semibold z-20"
        onClick={resetGame}
      >
        Reset
      </button>
    </article>
  );
}
