import Btn from "../component/Btn";
import Card from "../component/Card";
import styles from "./GuessNumber.module.scss";
import useGuessNumber from "../hooks/useGuessNumber";
import NewYearBombsWin from "../component/WinBackGround";

export default function GuessNumber() {
  const {
    min,
    max,
    remainingTries,
    guess,
    message,
    settingMessage,
    isGameOver,
    setGuess,
    handleSetting,
    handleGuess,
  } = useGuessNumber();

  return (
    <section className={styles.section}>
      <Card
        // https://media.proprofs.com/images/QM/user_images/2290773/1531093844.jpeg
        bgSrc="/tic-tac-toe.jpg"
        title="Guess The Number"
      >
        <article className={styles.article}>
          <form onSubmit={handleGuess} className="grid gap-5 text-center">
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              disabled={isGameOver}
              className={`p-2 rounded-lg text-black ${
                isGameOver ? "opacity-50 cursor-not-allowed" : ""
              }`}
              placeholder="Enter your guess"
            />

            {message && <p className="text-xs">{message}</p>}

            {!isGameOver && <Btn type="submit">Check Guess</Btn>}

            <article className="flex justify-between">
              <p className="text-xs">
                Range: {min} - {max}
              </p>
              <p className="text-xs">Tries Left: {remainingTries}</p>
            </article>
          </form>

          <hr />
          <form onSubmit={handleSetting} className="space-y-3">
            <section className="flex justify-between gap-2 text-center">
              <label className="w-full flex flex-col text-sm">
                <p>Min</p>
                <input
                  type="number"
                  name="min"
                  defaultValue={1}
                  className="w-16 p-2 rounded-lg text-black mt-1"
                />
              </label>

              <label className="w-full flex flex-col text-sm">
                <p>Max</p>
                <input
                  type="number"
                  name="max"
                  defaultValue={10}
                  className="w-16 p-2 rounded-lg text-black mt-1"
                />
              </label>

              <label className="w-full flex flex-col text-sm">
                <p>Tries</p>
                <input
                  type="number"
                  name="tries"
                  defaultValue={3}
                  className="w-16 p-2 rounded-lg text-black mt-1"
                />
              </label>
            </section>

            {settingMessage && (
              <p className="text-sm font-semibold text-red-400">
                {settingMessage}
              </p>
            )}
            <Btn type="submit">Reset</Btn>
          </form>
        </article>
        {message.includes("You Win!") && <NewYearBombsWin />}
      </Card>
    </section>
  );
}
