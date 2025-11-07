import { allOptions } from "../constants";
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
    <section className="flex flex-col justify-center items-center gap-5 h-screen text-white">
      <BlurBackGround src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckX8P9E-Z-50acV3B6PWXeNHD9pdExIJipg&s" />

      <article className="space-y-5 min-w-60 bg-blue-950/50 border p-5 rounded-xl text-center">
        <h2 className="text-2xl font-bold">Rock · Paper · Scissors</h2>

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
            className="w-full bg-gradient-to-r from-pink-600 to-blue-600 py-2 rounded-lg font-bold"
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
