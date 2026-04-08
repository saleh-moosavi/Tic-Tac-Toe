import Btn from "../component/Btn";
import Card from "../component/Card";
import styles from "./GuessWord.module.scss";
import useGuessWord from "../hooks/useGuessWord";

export default function GuessWord() {
  const { word, handleReset, checkEnteredChar } = useGuessWord();
  return (
    <Card bgSrc="/home.jpeg" title="Guess The Word">
      <section className={styles.section}>
        <article className={styles.article}>
          {word.map((item, index) => (
            <Btn key={index} onClick={() => checkEnteredChar(index)}>
              <p>{item.isEntered ? item.char : ".."}</p>
            </Btn>
          ))}
        </article>
        <Btn onClick={handleReset}>Reset</Btn>
      </section>
    </Card>
  );
}
