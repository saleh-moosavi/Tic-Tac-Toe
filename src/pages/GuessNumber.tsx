import Game from "../component/guess-the-number/Game";
import BlurBackGround from "../component/BlurBackGround";
import Setting from "../component/guess-the-number/Setting";
import useGuessNumber from "../hooks/guess-the-number/useGuessNumber";

export default function GuessNumber() {
  const {
    min,
    max,
    remainingTries,
    guess,
    message,
    isSettingTab,
    isGameOver,
    setGuess,
    setIsSettingTab,
    handleSetting,
    handleGuess,
    resetGame,
  } = useGuessNumber();

  return (
    <section className="flex flex-col justify-center items-center gap-5 h-screen text-white">
      <BlurBackGround src="https://media.proprofs.com/images/QM/user_images/2290773/1531093844.jpeg" />
      <button
        onClick={() => setIsSettingTab(!isSettingTab)}
        className="border px-4 py-2 bg-black/50 rounded-lg shadow-sm"
      >
        Go To {isSettingTab ? "Game" : "Settings"}
      </button>

      <article className="bg-black/50 border p-10 rounded-xl shadow-md shadow-cyan-200">
        {isSettingTab ? (
          <Setting handleSubmit={handleSetting} message={message} />
        ) : (
          <Game
            min={min}
            max={max}
            remainingTries={remainingTries}
            isGameOver={isGameOver}
            guess={guess}
            message={message}
            setGuess={setGuess}
            handleGuess={handleGuess}
            resetGame={resetGame}
          />
        )}
      </article>
    </section>
  );
}
