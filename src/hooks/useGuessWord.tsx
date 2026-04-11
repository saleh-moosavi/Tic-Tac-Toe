import { guessWordAllwords } from "../constants";
import { useEffect, useRef, useState } from "react";
import { getSecureRandomInt } from "../utils/randomInteger";

export default function useGuessWord() {
  const maxTries = useRef<number>(0);
  const wordRef = useRef<string>("");
  const [gameState, setGameState] = useState<"win" | "lose" | "unknown">(
    "unknown",
  );
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
    wordRef.current = guessWordAllwords[index];
    const splitedWord = wordRef.current.split("");
    const finalWord = splitedWord.map((char) => {
      return { char: char, isEntered: false };
    });
    maxTries.current = finalWord.length;
    setWord(finalWord);
    setGameState("unknown");
  };

  const checkEnteredChar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const guessInputValue = formData.get("guessInput");
    if (gameState !== "unknown" || guessInputValue == "") return;
    const wordCopy = [...word];
    let isChanged = false;
    wordCopy.map((item) => {
      if (
        guessInputValue?.toString().toLocaleLowerCase() ==
        item.char.toLocaleLowerCase()
      ) {
        item.isEntered = true;
        isChanged = true;
      }
    });
    setWord(wordCopy);
    if (!isChanged) {
      maxTries.current -= 1;
    }
    const remainsChars = wordCopy.filter((item) => item.isEntered == false);

    if (maxTries.current == 0 && remainsChars.length > 0) {
      setGameState("lose");
      return;
    } else if (remainsChars.length == 0) {
      setGameState("win");
      return;
    } else {
      setGameState("unknown");
      return;
    }
  };

  return { word, gameState, wordRef, maxTries, handleReset, checkEnteredChar };
}
