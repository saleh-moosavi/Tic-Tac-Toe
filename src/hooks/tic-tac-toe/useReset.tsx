import { TicTacToeBlock } from "../../types/ticTacToe";

export default function useReset({
  blocks,
  setBlocks,
  player,
  winner,
}: TicTacToeBlock) {
  const resetGame = () => {
    // Reset refs
    winner.current = undefined;
    player.current = "X";
    // Reset block styles
    document.querySelectorAll(".blockDiv").forEach((item) => {
      item.classList.remove("bg-sky", "bg-rose");
    });
    // Reset blocks values
    const allBlocks = [...blocks];
    allBlocks.map((item) => {
      item.id = "";
    });
    setBlocks(allBlocks);
  };
  return { resetGame };
}
