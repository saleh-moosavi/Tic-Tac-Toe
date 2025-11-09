import styles from "./GuessNumber.module.scss";
import Game from "../component/guess-the-number/Game";
import BlurBackGround from "../component/BlurBackGround";
import NewYearBombsWin from "../component/WinBackGround";
import Setting from "../component/guess-the-number/Setting";
import useGuessNumber from "../hooks/guess-the-number/useGuessNumber";

export default function GuessNumber() {
  const {
    min,
    max,
    remainingTries,
    guess,
    message,
    settingMessage,
    isSettingTab,
    isGameOver,
    setGuess,
    setIsSettingTab,
    handleSetting,
    handleGuess,
    resetGame,
  } = useGuessNumber();

  return (
    <section className={styles.section}>
      <BlurBackGround src="https://media.proprofs.com/images/QM/user_images/2290773/1531093844.jpeg" />
      <button
        onClick={() => setIsSettingTab(!isSettingTab)}
        className={styles.button}
      >
        Go To {isSettingTab ? "Game" : "Settings"}
      </button>

      <article className={styles.article}>
        {isSettingTab ? (
          <Setting handleSubmit={handleSetting} message={settingMessage} />
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
      {message.includes("You Win!") && <NewYearBombsWin />}
    </section>
  );
}
