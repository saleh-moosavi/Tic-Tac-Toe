import { useEffect, useState } from "react";
import Block from "./Block";
import { checkWinner } from "./checkWinner";

let player = "X";
let winner: any = null;
export default function Game() {
  const [blocks, setBlocks] = useState(Array(9).fill({ id: "" }));
  const [time, setTime] = useState<any>();

  useEffect(() => {
    const times = setInterval(() => {
      const newTime = new Date();
      setTime(newTime.toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(times);
    };
  }, []);

  const clickHandler = (e: any, index: any) => {
    const allBlocks = [...blocks];
    if (allBlocks[index].id === "" && !winner) {
      allBlocks[index] = { id: player };
      e.target.classList.add(player === "X" ? "bg-rose" : "bg-sky");
      e.target.innerHTML = player === "X" ? "O" : "X";
      player = player === "X" ? "O" : "X";
      setBlocks(allBlocks);
      winner = checkWinner(allBlocks);
    }
  };

  const resetGame = () => {
    winner = null;
    player = "X";
    const allBlocks = [...blocks];
    document.querySelectorAll(".blockDiv").forEach((item) => {
      item.classList.remove("bg-sky", "bg-rose");
    });
    allBlocks.map((item: any) => {
      item.id = "";
    });
    setBlocks(allBlocks);
  };

  return (
    <>
      <h1 className="text-white font-semibold mb-10 text-lg">{time}</h1>
      <h2 className="text-white mb-5 text-lg font-semibold">Tik Tak Toe</h2>
      <div className="grid grid-rows-3 grid-cols-3 gap-3">
        {blocks.map((block: any, index: any) => {
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
      {!winner ? (
        <h3 className="text-white mt-10 text-xl">Your Turn : {player}</h3>
      ) : (
        <h3 className="text-white mt-10 text-xl">* {winner} * wins the game</h3>
      )}
    </>
  );
}
