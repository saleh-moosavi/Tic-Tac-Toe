import { FormEvent, useRef, useState } from "react";

let maxTryCount = 2;
export default function GuessNumber() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState("");
  const maxValue = 100;
  const minValue = 1;
  const choosedNumber = 12;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current === null) return;
    if (maxTryCount === 0) {
      setMessage("You Loose");
      return;
    }
    maxTryCount -= 1;
    if (parseInt(inputRef.current.value) > choosedNumber) {
      setMessage("Number Is Lower");
    } else if (parseInt(inputRef.current.value) < choosedNumber) {
      setMessage("Number Is Larger");
    } else if (parseInt(inputRef.current.value) === choosedNumber) {
      setMessage("You Win");
    } else {
      setMessage("Enter a Valid Number");
    }
  };

  return (
    <section className="flex justify-center items-center bg-stone-700 h-screen text-white">
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
          The Number Is Between {maxValue} And {minValue} . You Have{" "}
          {maxTryCount} Chance
        </p>
      </form>
    </section>
  );
}
