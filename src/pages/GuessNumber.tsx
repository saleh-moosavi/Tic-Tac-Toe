import Btn from "../component/Btn";
import Card from "../component/Card";
import Input from "../component/Input";
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
    <>
      <Card
        bgSrc="/guess-the-number.jpeg"
        title="Guess The Number"
      >
        <article className={styles.article}>
          <form onSubmit={handleGuess} className={styles.guessForm}>
            <Input
              type="number"
              value={guess}
              disabled={isGameOver}
              placeholder="Enter your guess"
              onChange={(e) => setGuess(e.target.value)}
              costumClass={isGameOver ? "opacity-50 cursor-not-allowed" : ""}
            />

            {message && <p>{message}</p>}

            {!isGameOver && <Btn type="submit">Check Guess</Btn>}

            <article className={styles.gameDetails}>
              <p>
                Range: {min} - {max}
              </p>
              <p>Tries Left: {remainingTries}</p>
            </article>
          </form>

          <hr />
          <form onSubmit={handleSetting} className={styles.settingForm}>
            <section>
              <label>
                <p>Min</p>
                <Input type="number" name="min" defaultValue={1} />
              </label>

              <label>
                <p>Max</p>
                <Input type="number" name="max" defaultValue={10} />
              </label>

              <label>
                <p>Tries</p>
                <Input type="number" name="tries" defaultValue={3} />
              </label>
            </section>

            {settingMessage && (
              <p className={styles.settingMessage}>{settingMessage}</p>
            )}
            <Btn type="submit">Reset</Btn>
          </form>
        </article>
      </Card>
      {message.includes("You Win!") && <NewYearBombsWin />}
    </>
  );
}
