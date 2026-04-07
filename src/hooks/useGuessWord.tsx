import { useEffect, useState } from "react";
import { guessWordAllwords } from "../constants";
import { getSecureRandomInt } from "../utils/randomInteger";

export default function useGuessWord() {
  const [word, setWord] = useState("");

  useEffect(() => {
    handleReset();
  }, []);

  const handleReset = () => {
    const index = getSecureRandomInt(guessWordAllwords.length);
    const choosedWord = guessWordAllwords[index];
    setWord(choosedWord);
  };
  return { word, handleReset };
}
