export interface TicTacToeBlock {
  blocks: { id: String }[];
  setBlocks: React.Dispatch<React.SetStateAction<{ id: String }[]>>;
  player: React.MutableRefObject<String>;
  winner: React.MutableRefObject<String | undefined>;
}


export interface BlockType {
  id: number;
  value: String;
  handler: (e: React.MouseEvent<HTMLDivElement>, index: number) => void;
}