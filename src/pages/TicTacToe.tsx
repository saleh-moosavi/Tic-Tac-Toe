import Card from "../component/Card";
import { useRef, useState } from "react";
import styles from "./TicTacToe.module.scss";
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
      <article className={styles.container}>
        <div>
          {blocks.map((block, index: number) => {
            return (
              <div
                key={index}
                className={`${styles.block} blockDiv`}
                onClick={(e) => clickHandler(e, index)}
              >
                {block.id}
              </div>
            );
          })}
        </div>
        {winner.current === "" ? (
          <h3 className={styles.turnTitle}>Your Turn : {player.current}</h3>
        ) : (
          <>
            <h3 className={styles.turnTitle}>* {winner.current} * wins</h3>
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
