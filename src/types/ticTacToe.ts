export interface TicTacToeBlock {
  blocks: { id: string }[];
  setBlocks: React.Dispatch<React.SetStateAction<{ id: string }[]>>;
  player: React.MutableRefObject<string>;
  winner: React.MutableRefObject<string>;
}

export interface BlockType {
  id: number;
  value: string;
  handler: (e: React.MouseEvent<HTMLDivElement>, index: number) => void;
}
