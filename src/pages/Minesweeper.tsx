import { FaBomb } from "react-icons/fa";
import { useEffect, useState } from "react";
import styles from "./Minesweeper.module.scss";
import { IRecords } from "../types/mineSweeper";
import CreateTable from "../utils/mineSweeperHelpers";
import BlurBackGround from "../component/BlurBackGround";

export default function Minesweeper() {
  const [board, setBoard] = useState<IRecords[][]>([]);

  useEffect(() => {
    const { finaleTable } = CreateTable();
    setBoard(finaleTable);
  }, []);

  const handleClick = (row: number, col: number) => {
    const stack = [[row, col]];
    while (stack.length > 0) {
      const [currentRow, currentCol] = stack.pop() as number[];

      // Check bounds and if already revealed
      if (
        currentRow < 0 ||
        currentRow >= 5 ||
        currentCol < 0 ||
        currentCol >= 5 ||
        board[currentRow][currentCol].isClicked
      ) {
        continue;
      }

      // Reveal the cell
      const newBoard = [...board];
      newBoard[currentRow][currentCol] = {
        ...newBoard[currentRow][currentCol],
        isClicked: true,
      };
      setBoard(newBoard);

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
  };

  return (
    <section className={styles.section}>
      <BlurBackGround src="/tic-tac-toe.jpg" />
      <article className={styles.content}>
        <h3>Mine Sweeper</h3>
        <ul className={styles.mineContainer}>
          {board?.map((item, indexI) =>
            item.map((td, indexJ) => {
              const isBomb = td.isClicked && td.isBomb;
              const isSafe = td.isClicked && !td.isBomb && td.bombCount == 0;
              const isCounter =
                td.isClicked && !td.isBomb && td.bombCount !== 0;
              return (
                <li
                  key={indexI + "-" + indexJ}
                  onClick={() => handleClick(indexI, indexJ)}
                  className={isSafe ? styles.safeTd : ""}
                >
                  {isBomb && <FaBomb />}
                  {isSafe && ""}
                  {isCounter && td.bombCount}
                </li>
              );
            }),
          )}
        </ul>
      </article>
    </section>
  );
}
