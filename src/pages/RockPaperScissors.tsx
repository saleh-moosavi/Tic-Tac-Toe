import { ReactNode, useRef, useState } from "react";
import BlurBackGround from "../component/BlurBackGround";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";

const allOptions = [
  { icon: <FaHandRock />, title: "Rock" },
  { icon: <FaHandPaper />, title: "Paper" },
  { icon: <FaHandScissors />, title: "Scissors" },
];

export default function RockPaperScissors() {
  const [playerIcon, setPlayerIcon] = useState<ReactNode | null>(null);
  const [systemIcon, setSystemIcon] = useState<ReactNode | null>(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [systemScore, setSystemScore] = useState(0);
  const [roundCount, setRoundCount] = useState(0);
  const [totalRounds, setTotalRounds] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const roundsInput = useRef<HTMLInputElement | null>(null);

  const getSecureRandomInt = (max: number) => {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] % max;
  };

  const checkResult = (playerChoice: { icon: ReactNode; title: string }) => {
    if (!gameStarted || gameOver) return;

    const systemChoice = allOptions[getSecureRandomInt(3)];

    setPlayerIcon(playerChoice.icon);
    setSystemIcon(systemChoice.icon);

    if (playerChoice.title !== systemChoice.title) {
      const systemWins =
        (systemChoice.title === "Paper" && playerChoice.title === "Rock") ||
        (systemChoice.title === "Rock" && playerChoice.title === "Scissors") ||
        (systemChoice.title === "Scissors" && playerChoice.title === "Paper");

      if (systemWins) {
        setSystemScore((prev) => prev + 1);
      } else {
        setPlayerScore((prev) => prev + 1);
      }
    }

    setRoundCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= totalRounds) {
        setGameOver(true);
        if (playerScore > systemScore) setWinner("Player Wins!");
        else if (playerScore < systemScore) setWinner("System Wins!");
        else setWinner("It's a Draw!");
      }
      return newCount;
    });
  };

  const startGame = () => {
    const roundsValue = Number(roundsInput.current?.value || 3);
    setTotalRounds(roundsValue);
    setGameStarted(true);
    resetGame();
  };

  const resetGame = () => {
    setPlayerIcon(null);
    setSystemIcon(null);
    setPlayerScore(0);
    setSystemScore(0);
    setRoundCount(0);
    setGameOver(false);
    setWinner(null);
  };

  return (
    <section className="flex flex-col justify-center items-center gap-5 h-screen text-white">
      <BlurBackGround src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckX8P9E-Z-50acV3B6PWXeNHD9pdExIJipg&s" />

      <article className="space-y-5 min-w-60 bg-blue-950/50 border p-5 rounded-xl text-center">
        <h2 className="text-2xl font-bold">Rock · Paper · Scissors</h2>

        {gameStarted && (
          <>
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

            <div className="flex justify-between items-center">
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

            <p className="mt-2 text-sm opacity-75">
              Round: {roundCount} / {totalRounds}
            </p>

            {gameOver && (
              <div className="mt-4 text-xl font-bold text-yellow-400 animate-pulse">
                {winner}
              </div>
            )}
          </>
        )}

        <hr />

        {!gameStarted ? (
          <section className="flex flex-col gap-3">
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

            <button
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 py-2 rounded-lg font-bold"
              onClick={startGame}
            >
              Start Game
            </button>
          </section>
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
