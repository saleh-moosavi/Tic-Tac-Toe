import { BlockType } from "../../types/ticTacToe";

export default function Block({ id, handler, value }: BlockType) {
  return (
    <div
      className="blockDiv text-5xl cursor-pointer w-20 h-20 bg-white rounded-lg transition-all duration-300 flex justify-center items-center"
      onClick={(e) => handler(e, id)}
    >
      {value}
    </div>
  );
}
