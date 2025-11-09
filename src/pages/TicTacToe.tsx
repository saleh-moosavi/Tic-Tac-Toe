import styles from "./TicTacToe.module.scss";
import Game from "../component/tic-tac-toe/Game";
import BlurBackGround from "../component/BlurBackGround";

export default function TicTacToe() {
  return (
    <section className={styles.section}>
      <BlurBackGround src="/tic-tac-toe.jpg" />
      <Game />
    </section>
  );
}
