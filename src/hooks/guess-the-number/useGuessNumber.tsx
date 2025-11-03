import { useState } from "react";

export default function useGuessNumber() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);
  const [maxTries, setMaxTries] = useState(3);
  const [remainingTries, setRemainingTries] = useState(3);
  const [target, setTarget] = useState(generateRandom(1, 10));

  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [isSettingTab, setIsSettingTab] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);

  function generateRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleSetting = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const minVal = Number(form.min.value);
    const maxVal = Number(form.max.value);
    const triesVal = Number(form.tries.value);

    if (isNaN(minVal) || isNaN(maxVal) || isNaN(triesVal) || minVal >= maxVal) {
      setMessage("Please enter valid numbers.");
      return;
    }

    setMin(minVal);
    setMax(maxVal);
    setMaxTries(triesVal);
    setRemainingTries(triesVal);
    setTarget(generateRandom(minVal, maxVal));
    setMessage("");
    setGuess("");
    setIsGameOver(false);
    setIsSettingTab(false);
  };

  const handleGuess = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isGameOver) return;

    const numGuess = Number(guess);
    if (isNaN(numGuess) || guess.trim() == "") {
      setMessage("Enter a valid number!");
      return;
    }

    if (numGuess === target) {
      setMessage("You Win!");
      setIsGameOver(true);
      return;
    }

    const newTries = remainingTries - 1;
    setRemainingTries(newTries);

    if (newTries <= 0) {
      setMessage(`You Lose! The number was ${target}.`);
      setIsGameOver(true);
      return;
    }

    if (numGuess > target) {
      setMessage("Too high! Try a smaller number.");
    } else {
      setMessage("Too low! Try a larger number.");
    }
  };

  const resetGame = () => {
    setTarget(generateRandom(min, max));
    setRemainingTries(maxTries);
    setGuess("");
    setMessage("");
    setIsGameOver(false);
  };

  return {
    min,
    max,
    maxTries,
    remainingTries,
    isSettingTab,
    isGameOver,
    guess,
    message,
    setGuess,
    setIsSettingTab,
    handleSetting,
    handleGuess,
    resetGame,
  };
}
