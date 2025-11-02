import { gameProps } from "../../types/guessNumber";

export default function Game({
  inputRef,
  message,
  minValue,
  maxValue,
  maxTryCount,
  handleSubmit,
}: gameProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 border p-10 rounded-xl text-center"
    >
      <h2 className="text-xl font-bold">Guess The Hidden Number</h2>
      <input
        type="number"
        ref={inputRef}
        className="p-2 rounded-lg border-none outline-none focus:shadow-sm shadow-white text-black"
      />
      {message && <p className="text-xs">{message}</p>}
      <button type="submit" className="px-4 py-2 bg-sky-600 rounded-lg">
        Check It
      </button>
      <p className="text-xs">
        The Number Is Between {minValue} And {maxValue}. You Have {maxTryCount}{" "}
        Chance(s)
      </p>
    </form>
  );
}
