import { useEffect, useState } from "react";
import { guessWordAllwords } from "../constants";
import { getSecureRandomInt } from "../utils/randomInteger";

export default function useGuessWord() {
  const [word, setWord] = useState<
    {
      char: string;
      isEntered: boolean;
    }[]
  >([]);

  useEffect(() => {
    handleReset();
  }, []);

  const handleReset = () => {
    const index = getSecureRandomInt(guessWordAllwords.length);
    const choosedWord = guessWordAllwords[index];
    const splitedWord = choosedWord.split("");
    const finalWord = splitedWord.map((char) => {
      return { char: char, isEntered: false };
    });
    setWord(finalWord);
  };

  const checkEnteredChar = (index: number) => {
    const wordCopy = [...word];
    wordCopy[index].isEntered = true;
    setWord(wordCopy);
  };

  return { word, handleReset, checkEnteredChar };
}
