import Btn from "../component/Btn";
import Card from "../component/Card";
import styles from "./GuessWord.module.scss";
import useGuessWord from "../hooks/useGuessWord";
import Input from "../component/Input";

export default function GuessWord() {
  const { word, gameState, handleReset, checkEnteredChar } = useGuessWord();
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
          <Input type="string" maxLength={1} name="guess" />
          <Btn type="submit">Check</Btn>
        </form>
        <hr />
        <p>{gameState}</p>
        <Btn onClick={handleReset}>Reset</Btn>
      </section>
    </Card>
  );
}
