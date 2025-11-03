interface GameProps {
  min: number;
  max: number;
  remainingTries: number;
  guess: string;
  message: string;
  isGameOver: boolean;
  setGuess: (val: string) => void;
  handleGuess: (e: React.FormEvent<HTMLFormElement>) => void;
  resetGame: () => void;
}

export default function Game({
  min,
  max,
  remainingTries,
  guess,
  message,
  isGameOver,
  setGuess,
  handleGuess,
  resetGame,
}: GameProps) {
  return (
    <form onSubmit={handleGuess} className="grid gap-5 text-center">
      <h2 className="text-xl font-bold">Guess The Number 🎯</h2>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={isGameOver}
        className={`p-2 rounded-lg text-black ${
          isGameOver ? "opacity-50 cursor-not-allowed" : ""
        }`}
        placeholder="Enter your guess"
      />

      {message && <p className="text-xs">{message}</p>}

      {!isGameOver ? (
        <button
          type="submit"
          className="px-4 py-2 bg-sky-600 rounded-lg hover:bg-sky-500"
        >
          Check Guess
        </button>
      ) : (
        <button
          type="button"
          onClick={resetGame}
          className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-500"
        >
          Play Again
        </button>
      )}

      <article className="flex justify-between">
        <p className="text-xs">
          Range: {min} - {max}
        </p>
        <p className="text-xs">Tries Left: {remainingTries}</p>
      </article>
    </form>
  );
}
