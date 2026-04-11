import Btn from "../component/Btn";
import Card from "../component/Card";
import Input from "../component/Input";
import styles from "./GuessWord.module.scss";
import useGuessWord from "../hooks/useGuessWord";

export default function GuessWord() {
  const { word, wordRef, gameState, maxTries, handleReset, checkEnteredChar } =
    useGuessWord();
  return (
    <Card bgSrc="/home.jpeg" title="Guess The Word">
      <section className={styles.section}>
        <article className={styles.wordArticle}>
          {word.map((item, index) => (
            <Btn key={index}>
              <p>{item.isEntered ? item.char : ".."}</p>
            </Btn>
          ))}
        </article>
        <form className={styles.form} onSubmit={checkEnteredChar}>
          <Input type="string" maxLength={1} name="guessInput" />
          <Btn type="submit">Check</Btn>
        </form>
        <hr />
        <p
          className={
            gameState == "lose" ? styles.gameStateLose : styles.gameStateWin
          }
        >
          {gameState !== "unknown" ? `You ${gameState}` : ""}
          {gameState == "lose" && ` - The Word Was ${wordRef.current}`}
          {gameState == "unknown" && ` You Have ${maxTries.current} Try`}
        </p>
        <Btn onClick={handleReset}>Reset</Btn>
      </section>
    </Card>
  );
}
