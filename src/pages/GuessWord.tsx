import Btn from "../component/Btn";
import Card from "../component/Card";
import styles from "./GuessWord.module.scss";
import useGuessWord from "../hooks/useGuessWord";

export default function GuessWord() {
  const { word, handleReset } = useGuessWord();
  return (
    <Card bgSrc="/home.jpeg" title="Guess The Word">
      <section className={styles.section}>
        <p>{word}</p>
        <Btn onClick={handleReset}>Reset</Btn>
      </section>
    </Card>
  );
}
