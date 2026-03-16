import Card from "../component/Card";
import { FaBomb } from "react-icons/fa";
import { useEffect, useState } from "react";
import styles from "./Minesweeper.module.scss";
import { IRecords } from "../types/mineSweeper";
import CreateTable, { checkIsWin } from "../utils/mineSweeperHelpers";

export default function Minesweeper() {
  const [board, setBoard] = useState<IRecords[][]>([]);
  const [level, setLevel] = useState<5 | 7 | 10>(5);
  const [gameState, setGameState] = useState<"UNKNOWN" | "WIN" | "LOSE">(
    "UNKNOWN",
  );

  useEffect(() => {
    handleReset();
  }, [level]);

  const handleReset = () => {
    const { finaleTable } = CreateTable(level);
    setBoard(finaleTable);
    setGameState("UNKNOWN");
  };

  const handleClick = (row: number, col: number) => {
    if (gameState !== "UNKNOWN") return;
    const stack = [[row, col]];
    const newBoard = [...board];
    while (stack.length > 0) {
      const [currentRow, currentCol] = stack.pop() as number[];

      // Check bounds and if already revealed
      if (
        currentRow < 0 ||
        currentRow >= level ||
        currentCol < 0 ||
        currentCol >= level ||
        board[currentRow][currentCol].isClicked
      ) {
        continue;
      }

      // Reveal the cell
      newBoard[currentRow][currentCol] = {
        ...newBoard[currentRow][currentCol],
        isClicked: true,
      };
      setBoard(newBoard);
      if (newBoard[currentRow][currentCol].isBomb) {
        setGameState("LOSE");
        return;
      }

      // If it's empty, add neighbors to stack
      if (newBoard[currentRow][currentCol].bombCount === 0) {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            stack.push([currentRow + i, currentCol + j]);
          }
        }
      }
    }
    if (checkIsWin(newBoard, level)) setGameState("WIN");
  };

  return (
    <Card title="Mine Sweeper" bgSrc="/tic-tac-toe.jpg">
      <div className={styles.levelContainer}>
        <button className={styles.button} onClick={() => setLevel(5)}>
          Easy
        </button>
        <button className={styles.button} onClick={() => setLevel(7)}>
          Medium
        </button>
        <button className={styles.button} onClick={() => setLevel(10)}>
          Hard
        </button>
      </div>
      <ul
        className={styles.mineContainer}
        style={{ gridTemplateColumns: `repeat(${level}, 1fr)` }}
      >
        {board?.map((item, indexI) =>
          item.map((td, indexJ) => {
            const isBomb = td.isClicked && td.isBomb;
            const isSafe = td.isClicked && !td.isBomb && td.bombCount == 0;
            const isCounter = td.isClicked && !td.isBomb && td.bombCount !== 0;
            return (
              <li
                key={indexI + "-" + indexJ}
                className={isSafe ? styles.safeTd : ""}
                onClick={() => handleClick(indexI, indexJ)}
                style={{ color: gameState == "WIN" ? "green" : "black" }}
              >
                {isBomb && <FaBomb style={{ color: "red" }} />}
                {isSafe && ""}
                {isCounter && td.bombCount}
              </li>
            );
          }),
        )}
      </ul>
      <div className={styles.cardFooter}>
        <button onClick={handleReset} className={styles.button}>
          Reset
        </button>
        {gameState === "LOSE" ? (
          <p style={{ color: "#ff4848" }}>You Lose</p>
        ) : gameState === "WIN" ? (
          <p style={{ color: "#54ff48" }}>You Win</p>
        ) : (
          <p style={{ color: "white" }}>...</p>
        )}
      </div>
    </Card>
  );
}
