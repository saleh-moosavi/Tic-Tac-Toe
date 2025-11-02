import { FormEvent, useRef, useState } from "react";

export default function useHandler() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);
  const [tries, setTries] = useState(3);
  const [message, setMessage] = useState("");
  const [isSettingTab, setIsSettingTab] = useState(true);
  const [choosedNumber, setChoosedNumber] = useState<number>(
    Math.floor(Math.random() * (max - min + 1)) + min
  );

  // Submit Save Setting
  const handleSetting = (e: FormEvent) => {
    e.preventDefault();

    const minVal = parseInt((e.target as any).min.value);
    const maxVal = parseInt((e.target as any).max.value);
    const tryVal = parseInt((e.target as any).tries.value);

    if (isNaN(minVal) || isNaN(maxVal) || isNaN(tryVal)) {
      setMessage("Please enter valid numbers!");
      return;
    }

    setMin(minVal);
    setMax(maxVal);
    setTries(tryVal);

    setChoosedNumber(
      Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal
    );
  };

  //Submit Game Handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!inputRef.current?.value) return;

    const guess = parseInt(inputRef.current.value);
    if (isNaN(guess)) {
      setMessage("Enter a valid number!");
      return;
    }

    if (tries <= 0) {
      setMessage("You Lose!");
      return;
    }

    setTries((t) => t - 1);
    if (guess > choosedNumber) {
      setMessage("Number is lower");
    } else if (guess < choosedNumber) {
      setMessage("Number is higher");
    } else {
      setMessage("🎉 You Win!");
    }
  };

  return {
    max,
    setMax,
    min,
    setMin,
    tries,
    setTries,
    handleSetting,
    handleSubmit,
    message,
    setMessage,
    isSettingTab,
    setIsSettingTab,
    inputRef,
  };
}
