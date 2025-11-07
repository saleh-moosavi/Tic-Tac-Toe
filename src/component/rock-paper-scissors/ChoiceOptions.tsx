export default function ChoiceOptions({
  gameOver,
  allOptions,
  checkResult,
}: {
  gameOver: boolean;
  allOptions: {
    icon: JSX.Element;
    title: string;
  }[];
  checkResult: (playerChoice: { icon: React.ReactNode; title: string }) => void;
}) {
  return (
    <article
      className={`flex justify-between items-center gap-2 text-white hover:*:text-yellow-500 *:cursor-pointer *:p-2 *:bg-white/20 *:rounded-lg transition-all duration-200 ${
        gameOver ? "opacity-30 pointer-events-none" : ""
      }`}
    >
      {allOptions.map((item) => (
        <span
          key={item.title}
          className="*:size-8"
          onClick={() => checkResult(item)}
        >
          {item.icon}
        </span>
      ))}
    </article>
  );
}
