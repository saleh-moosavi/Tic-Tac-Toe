import Btn from "../component/Btn";
import Card from "../component/Card";
import { allOptions } from "../constants";
import useLogic from "../hooks/useRockPaperScissors";

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
          className={`flex justify-between items-center gap-2 text-white hover:*:text-yellow-500 *:cursor-pointer *:p-2 *:bg-white/20 *:rounded-lg transition-all duration-200 ${
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
        <div className="flex justify-between items-center gap-2 text-white">
          <span className="w-20 aspect-square bg-gradient-to-tr from-blue-500 to-pink-500 rounded-lg flex justify-center items-center *:size-10">
            {playerIcon}
          </span>

          <span className="font-bold text-lg">
            {playerScore} /VS/ {systemScore}
          </span>

          <span className="w-20 aspect-square bg-gradient-to-tr from-blue-500 to-pink-500 rounded-lg flex justify-center items-center *:size-10">
            {systemIcon}
          </span>
        </div>

        <p className="mt-2 text-sm opacity-75 text-white">
          Round: {roundCount} / {totalRounds}
        </p>
      </>

      <hr />

      <section className="flex flex-col gap-3 text-white">
        <div className="flex justify-between items-center gap-5">
          <p>How Many Rounds?</p>
          <input
            min={1}
            ref={roundsInput}
            type="number"
            defaultValue={3}
            className="p-1 text-black rounded-lg inline-block w-12 text-center border-none outline-none"
          />
        </div>
      </section>
      <Btn onClick={resetGame}>Reset Game</Btn>
      {gameOver && (
        <div className="text-xl font-bold text-yellow-400 animate-pulse">
          {winner}
        </div>
      )}
    </Card>
  );
}
