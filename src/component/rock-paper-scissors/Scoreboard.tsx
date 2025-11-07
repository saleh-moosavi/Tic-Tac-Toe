import { ReactNode } from "react";

export default function Scoreboard({
  playerIcon,
  playerScore,
  systemIcon,
  systemScore,
  roundCount,
  totalRounds,
  gameOver,
  winner,
}: {
  playerIcon: ReactNode;
  systemIcon: ReactNode;
  playerScore: number;
  systemScore: number;
  roundCount: number;
  totalRounds: number;
  gameOver: boolean;
  winner: string | null;
}) {
  return (
    <>
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
  );
}
