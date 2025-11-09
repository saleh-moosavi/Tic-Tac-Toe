import { allOptions } from "../constants";
import styles from "./RockPaperScissors.module.scss";
import BlurBackGround from "../component/BlurBackGround";
import useLogic from "../hooks/rocck-paper-scissors/useLogic";
import Setting from "../component/rock-paper-scissors/Setting";
import Scoreboard from "../component/rock-paper-scissors/Scoreboard";
import ChoiceOptions from "../component/rock-paper-scissors/ChoiceOptions";

export default function RockPaperScissors() {
  const {
    gameStarted,
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
    startGame,
    resetGame,
    setGameStarted,
  } = useLogic();
  return (
    <section className={styles.section}>
      <BlurBackGround src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckX8P9E-Z-50acV3B6PWXeNHD9pdExIJipg&s" />

      <article className={styles.article}>
        <h2>Rock · Paper · Scissors</h2>

        {gameStarted && (
          <>
            {/* Player choices */}
            <ChoiceOptions
              gameOver={gameOver}
              allOptions={allOptions}
              checkResult={checkResult}
            />

            {/* Scoreboard */}
            <Scoreboard
              gameOver={gameOver}
              playerIcon={playerIcon}
              playerScore={playerScore}
              systemIcon={systemIcon}
              systemScore={systemScore}
              roundCount={roundCount}
              totalRounds={totalRounds}
              winner={winner}
            />
          </>
        )}

        <hr />

        {!gameStarted ? (
          <Setting roundsInput={roundsInput} startGame={startGame} />
        ) : (
          <button
            className={styles.button}
            onClick={() => {
              resetGame();
              setGameStarted(false);
            }}
          >
            Reset Game
          </button>
        )}
      </article>
    </section>
  );
}
