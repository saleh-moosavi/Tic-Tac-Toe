export default function Setting({
  roundsInput,
  startGame,
}: {
  roundsInput: React.MutableRefObject<HTMLInputElement | null>;

  startGame: () => void;
}) {
  return (
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
  );
}
