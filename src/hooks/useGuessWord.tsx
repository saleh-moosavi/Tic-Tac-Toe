import { useEffect, useState } from "react";

export default function useGuessWord() {
  const [word, setWord] = useState("");

  useEffect(() => {
    handleReset();
  }, []);

  const handleReset = () => {
    setWord("Hello" + ` ${Math.floor(Math.random() * 10)}`);
  };
  return { word, handleReset };
}
