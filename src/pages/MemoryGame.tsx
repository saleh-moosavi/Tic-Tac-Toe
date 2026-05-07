import Btn from "../component/Btn";
import Card from "../component/Card";
import styles from "./MemoryGame.module.scss";
import useMemoryGame from "../hooks/useMemoryGame";

export default function MemoryGame() {
  const { level, setLevel, cards, moves, isWin, handleClick, handleReset } =
    useMemoryGame();

  return (
    <Card bgSrc="/memory-game.png" title="Memory Game">
      <div className={styles.memoryGame}>
        <div className={styles.levelSelect}>
          <Btn onClick={() => setLevel(12)}>Easy</Btn>
          <Btn onClick={() => setLevel(16)}>Medium</Btn>
          <Btn onClick={() => setLevel(20)}>Hard</Btn>
        </div>
        <div
          className={styles.gameBoard}
          style={{
            gridTemplateColumns: `repeat(${level == 20 ? 5 : 4}, 1fr)`,
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className={`${styles.card} ${card.isFlipped && styles.flipped} ${card.isMatched && styles.matched}`}
              onClick={() => handleClick(i)}
            >
              {card.isFlipped ? card.symbol : " "}
            </div>
          ))}
        </div>
        <div className={styles.gameInfo}>
          <p>{isWin ? `You Win in ${moves} Moves` : `Moves : ${moves}`}</p>
        </div>
        <Btn onClick={() => handleReset()}>Reset</Btn>
      </div>
    </Card>
  );
}
