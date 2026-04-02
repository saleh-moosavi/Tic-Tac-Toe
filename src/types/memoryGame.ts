import { ReactNode } from "react";

export interface IMemoryItem {
  symbol: ReactNode;
  isFlipped: boolean;
  isMatched: boolean;
}
