import { memoryGameSymbols } from "../constants";
import { IMemoryItem } from "../types/memoryGame";
import { getSecureRandomInt } from "./randomInteger";

export const generateCardSymbol = (cards: IMemoryItem[]) => {
  const indexes = Array(cards.length)
    .fill(0)
    .map((item, index) => item + index);
  let symbol = 0;
  const finalCards = [...cards];
  // Start Loop
  while (indexes.length > 0) {
    const first = getSecureRandomInt(indexes.length);
    finalCards[indexes[first]].symbol = memoryGameSymbols[symbol];
    indexes.splice(first, 1);
    const second = getSecureRandomInt(indexes.length);
    finalCards[indexes[second]].symbol = memoryGameSymbols[symbol];
    indexes.splice(second, 1);
    symbol += 1;
  }
  return finalCards;
};
