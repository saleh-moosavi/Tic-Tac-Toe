import Block from "./Block";
import useTime from "../../hooks/useTime";
import { useRef, useState } from "react";
import useClick from "../../hooks/tic-tac-toe/useClick";
import useReset from "../../hooks/tic-tac-toe/useReset";

export default function Game() {
  const [blocks, setBlocks] = useState<{ id: String }[]>(
    Array(9).fill({ id: "" })
  );
  const { time } = useTime();
  const player = useRef("X");
  const winner = useRef<String | undefined>(undefined);
  const { resetGame } = useReset({ blocks, setBlocks, player, winner });
  const { clickHandler } = useClick({ blocks, setBlocks, player, winner });

  return (
    <>
      <h1 className="text-white font-semibold mb-10 text-lg">{time}</h1>
      <h2 className="text-white mb-5 text-lg font-semibold">Tik Tak Toe</h2>
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
        className="text-white bg-green-700 px-3 py-2 rounded-lg mt-5 w-32 font-semibold"
        onClick={resetGame}
      >
        Reset
      </button>
      {!winner.current ? (
        <h3 className="text-white mt-10 text-xl">
          Your Turn : {player.current}
        </h3>
      ) : (
        <h3 className="text-white mt-10 text-xl">
          * {winner.current} * wins the game
        </h3>
      )}
    </>
  );
}
