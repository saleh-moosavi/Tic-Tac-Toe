import { TicTacToeBlock } from "../../types/ticTacToe";
import { checkWinner } from "../../component/tic-tac-toe/checkWinner";

export default function useClick({
  blocks,
  setBlocks,
  player,
  winner,
}: TicTacToeBlock) {
  const clickHandler = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const allBlocks = [...blocks];
    //check if block is already filled or game is won
    if (allBlocks[index].id !== "" && winner.current) return;
    allBlocks[index] = { id: player.current };
    (e.target as HTMLDivElement).classList.add(
      player.current === "X" ? "bg-rose" : "bg-sky"
    );
    (e.target as HTMLDivElement).innerHTML = player.current === "X" ? "O" : "X";
    player.current = player.current === "X" ? "O" : "X";
    setBlocks(allBlocks);
    winner.current = checkWinner(allBlocks);
  };
  return { clickHandler };
}
