import { useState } from "react";
import styles from "./Minesweeper.module.scss";
import BlurBackGround from "../component/BlurBackGround";
import { FaBomb } from "react-icons/fa";

interface IRecords {
  id: number;
  isBomb: boolean;
  isClicked: boolean;
  bombCount: number;
}
const level = Array(25).fill(0);
const init = level.map((_, i) => {
  return { id: i, isBomb: false, bombCount: 0, isClicked: false };
});
const bombIndexes = Array(5)
  .fill(0)
  .map(() => Math.floor(Math.random() * 25));
bombIndexes.map((item) => {
  init.map((i) => {
    if (i.id === item) i.isBomb = true;
  });
});

export default function Minesweeper() {
  const [arrayContent, setArrayContent] = useState<IRecords[]>(init);

  const handleClik = (index: number) => {
    const oldArr = arrayContent ? [...arrayContent] : [];
    oldArr[index].isClicked = true;
    if (
      !oldArr[index].isBomb &&
      !oldArr[index + 4]?.isBomb &&
      !oldArr[index + 5]?.isBomb &&
      !oldArr[index + 6]?.isBomb &&
      !oldArr[index - 1]?.isBomb &&
      !oldArr[index + 1]?.isBomb &&
      !oldArr[index - 4]?.isBomb &&
      !oldArr[index - 5]?.isBomb &&
      !oldArr[index - 6]?.isBomb
    ) {
      oldArr[index + 4].isClicked = true;
      oldArr[index + 5].isClicked = true;
      oldArr[index + 6].isClicked = true;
      oldArr[index - 1].isClicked = true;
      oldArr[index + 1].isClicked = true;
      oldArr[index - 4].isClicked = true;
      oldArr[index - 5].isClicked = true;
      oldArr[index - 6].isClicked = true;
    }
    setArrayContent(oldArr);
  };

  return (
    <section className={styles.section}>
      <BlurBackGround src="/tic-tac-toe.jpg" />
      <article className={styles.content}>
        <h3>Mine Sweeper</h3>
        <ul className={styles.mineContainer}>
          {arrayContent?.map((item) => (
            <li key={item.id} onClick={() => handleClik(item.id)}>
              {item.isClicked ? item.isBomb ? <FaBomb /> : item.bombCount : ""}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
