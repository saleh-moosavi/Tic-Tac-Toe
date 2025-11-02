import Game from "../component/guess-the-number/Game";
import Setting from "../component/guess-the-number/Setting";
import useHandler from "../hooks/guess-the-number/useHandler";

export default function GuessNumber() {
  const {
    max,
    min,
    tries,
    message,
    inputRef,
    isSettingTab,
    handleSubmit,
    handleSetting,
    setIsSettingTab,
  } = useHandler();
  return (
    <section className="flex flex-col justify-center items-center gap-5 bg-stone-700 h-screen text-white">
      <p
        onClick={() => setIsSettingTab(!isSettingTab)}
        className="cursor-pointer border px-4 py-2 rounded-lg"
      >
        Go To {isSettingTab ? "Game" : "Setting"}
      </p>

      {isSettingTab ? (
        <Setting handleSubmit={handleSetting} />
      ) : (
        <Game
          inputRef={inputRef}
          message={message}
          minValue={min.toString()}
          maxValue={max.toString()}
          maxTryCount={tries.toString()}
          handleSubmit={handleSubmit}
        />
      )}
    </section>
  );
}
