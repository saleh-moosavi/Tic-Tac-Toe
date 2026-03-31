import { IMemoryItem } from "../types/memoryGame";
import { useEffect, useRef, useState } from "react";

export default function useMemoryGame() {
  const flipTimeRef = useRef<boolean>(false);
  const oldCardsRef = useRef<IMemoryItem[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [isWin, SetIsWin] = useState<boolean>(false);
  const [level, setLevel] = useState<12 | 16 | 20>(12);
  const [cards, setCards] = useState<IMemoryItem[]>([]);

  useEffect(() => {
    handleReset();
  }, [level]);

  const handleReset = () => {
    const init = Array(level)
      .fill(0)
      .map(() => {
        return { symbol: 0, isFlipped: false, isMatched: false };
      });
    setCards(init);
    setMoves(0);
    oldCardsRef.current = init;
    flipTimeRef.current = false;
    SetIsWin(false);
  };

  const checkIsWin = (lastCards: IMemoryItem[]) => {
    const remainCards = lastCards.filter((card) => card.isFlipped == false);
    if (remainCards.length == 0) {
      SetIsWin(true);
    }
  };

  const handleClick = (index: number) => {
    if (isWin || cards[index].isFlipped) return;
    const prevCards = [...cards];
    prevCards[index].isFlipped = true;
    setCards(prevCards);
    // if is second card
    if (flipTimeRef.current) {
      setMoves((prev) => prev + 1);
      flipTimeRef.current = false;
      checkIsWin(prevCards);
      return;
    }
    flipTimeRef.current = true;
    return;
  };
  return { level, setLevel, cards, moves, isWin, handleClick, handleReset };
}
