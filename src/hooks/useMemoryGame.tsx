import { IMemoryItem } from "../types/memoryGame";
import { useEffect, useRef, useState } from "react";
import { generateCardSymbol } from "../utils/memoryGame";

export default function useMemoryGame() {
  const timerRef = useRef<number>(0);
  const isFirstCardRef = useRef<boolean>(true);
  const oldCardsRef = useRef<IMemoryItem[]>([]);
  const firstFlipedCardRef = useRef<number | null>(null);
  const [moves, setMoves] = useState<number>(0);
  const [isWin, SetIsWin] = useState<boolean>(false);
  const [level, setLevel] = useState<12 | 16 | 20>(12);
  const [cards, setCards] = useState<IMemoryItem[]>([]);

  useEffect(() => {
    handleReset();
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [level]);

  const handleReset = () => {
    const init = Array(level)
      .fill(0)
      .map(() => {
        return { symbol: 0, isFlipped: false, isMatched: false };
      });
    oldCardsRef.current = generateCardSymbol(init);
    setCards(oldCardsRef.current);
    setMoves(0);
    isFirstCardRef.current = true;
    SetIsWin(false);
  };

  const checkIsWin = (lastCards: IMemoryItem[]) => {
    const remainCards = lastCards.filter((card) => card.isFlipped == false);
    if (remainCards.length == 0) {
      SetIsWin(true);
    }
  };

  const handleNextMove = () => {
    isFirstCardRef.current = true;
    firstFlipedCardRef.current = null;
    setMoves((prev) => prev + 1);
    timerRef.current = 0;
  };

  const handleClick = (index: number) => {
    if (
      isWin ||
      cards[index].isFlipped ||
      (!isFirstCardRef.current && timerRef.current)
    )
      return;

    // Flip Clicked Card
    const prevCards = [...cards];
    prevCards[index].isFlipped = true;
    setCards(prevCards);

    // If Is First Card
    if (isFirstCardRef.current) {
      isFirstCardRef.current = false;
      firstFlipedCardRef.current = index;
      return;
    }

    // For Second Card
    timerRef.current = setTimeout(() => {
      if (
        firstFlipedCardRef.current !== null &&
        prevCards[firstFlipedCardRef.current].symbol == prevCards[index].symbol
      ) {
        prevCards[firstFlipedCardRef.current!].isMatched = true;
        prevCards[index].isMatched = true;
        checkIsWin(prevCards);
        handleNextMove();
        return;
      }
      prevCards[firstFlipedCardRef.current!].isFlipped = false;
      prevCards[index].isFlipped = false;
      setCards(prevCards);
      handleNextMove();
      return;
    }, 500);
  };
  return { level, setLevel, cards, moves, isWin, handleClick, handleReset };
}
