import Btn from "../component/Btn";
import Card from "../component/Card";
import { FaBomb } from "react-icons/fa";
import styles from "./Minesweeper.module.scss";
import useMinesweeper from "../hooks/useMinesweeper";

export default function Minesweeper() {
  const { level, setLevel, board, gameState, handleClick, handleReset } =
    useMinesweeper();

  return (
    <Card title="Mine Sweeper" bgSrc="/tic-tac-toe.jpg">
      <div className={styles.levelContainer}>
        <Btn onClick={() => setLevel(5)}>Easy</Btn>
        <Btn onClick={() => setLevel(7)}>Medium</Btn>
        <Btn onClick={() => setLevel(10)}>Hard</Btn>
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
        <Btn onClick={handleReset}>Reset</Btn>
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
