import { checkWinner } from "../utils/ticTacToeHelpers";

interface TicTacToeBlock {
  blocks: { id: string }[];
  setBlocks: React.Dispatch<React.SetStateAction<{ id: string }[]>>;
  player: React.MutableRefObject<string>;
  winner: React.MutableRefObject<string>;
}

export default function useTicTacToe({
  blocks,
  setBlocks,
  player,
  winner,
}: TicTacToeBlock) {
  const clickHandler = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const allBlocks = [...blocks];
    //check if block is already filled or game is won
    if (allBlocks[index].id !== "" || winner.current !== "") return;
    allBlocks[index] = { id: player.current };
    (e.target as HTMLDivElement).style.backgroundColor =
      player.current === "X" ? "#fecdd3" : "#bae6fd";
    (e.target as HTMLDivElement).innerHTML = player.current === "X" ? "O" : "X";
    player.current = player.current === "X" ? "O" : "X";
    setBlocks(allBlocks);
    winner.current = checkWinner(allBlocks) || "";
  };

  const resetGame = () => {
    // Reset refs
    winner.current = "";
    player.current = "X";
    // Reset block styles
    document.querySelectorAll(".blockDiv").forEach((item) => {
      (item as HTMLDivElement).style.backgroundColor = "white";
    });
    // Reset blocks values
    const allBlocks = [...blocks];
    allBlocks.map((item) => {
      item.id = "";
    });
    setBlocks(allBlocks);
  };
  return { clickHandler, resetGame };
}
