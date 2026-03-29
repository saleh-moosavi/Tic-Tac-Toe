import Btn from "../component/Btn";
import Card from "../component/Card";
import Input from "../component/Input";
import { allOptions } from "../constants";
import useLogic from "../hooks/useRockPaperScissors";
import styles from "./RockPaperScissors.module.scss";

export default function RockPaperScissors() {
  const {
    gameOver,
    checkResult,
    playerIcon,
    systemIcon,
    playerScore,
    systemScore,
    roundCount,
    totalRounds,
    winner,
    roundsInput,
    resetGame,
  } = useLogic();
  return (
    <Card
      title="Rock · Paper · Scissors"
      // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckX8P9E-Z-50acV3B6PWXeNHD9pdExIJipg&s"
      bgSrc="/home.jpeg"
    >
      <>
        {/* Player choices */}
        <article
          className={`${styles.article} ${
            gameOver ? "opacity-30 pointer-events-none" : ""
          }`}
        >
          {allOptions.map((item) => (
            <span
              key={item.title}
              className="*:size-8"
              onClick={() => checkResult(item)}
            >
              {item.icon}
            </span>
          ))}
        </article>

        {/* Scoreboard */}
        <div className={styles.scoreboardDiv}>
          <span>{playerIcon}</span>

          <span className="font-bold text-lg">
            {playerScore} /VS/ {systemScore}
          </span>

          <span>{systemIcon}</span>
        </div>

        <p className={styles.round}>
          Round: {roundCount} / {totalRounds}
        </p>
      </>

      <hr />

      <section className={styles.settingSection}>
        <div>
          <p>How Many Rounds?</p>
          <Input
            type="number"
            min={1}
            ref={roundsInput}
            defaultValue={3}
            costumClass="max-w-10"
          />
        </div>
      </section>
      <Btn onClick={resetGame}>Reset Game</Btn>
      {gameOver && <div className={styles.messageGameState}>{winner}</div>}
    </Card>
  );
}
