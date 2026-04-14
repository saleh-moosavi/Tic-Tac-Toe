import Btn from "../component/Btn";
import Card from "../component/Card";
import Input from "../component/Input";
import { CgBackspace } from "react-icons/cg";
import { calculatorBtns } from "../constants";
import styles from "./Calculator.module.scss";

export default function Calculator() {
  return (
    <Card bgSrc="/home.jpeg" title="Calculator">
      <section className="space-y-5">
        <Input type="string" />
        <article className={styles.resultArticle}>
          <p>Result</p>
          <p>
            <CgBackspace className="size-4" />
          </p>
        </article>
        <article className={styles.buttonsArticle}>
          {calculatorBtns.map((item) => (
            <Btn key={item}>{item}</Btn>
          ))}
        </article>
      </section>
    </Card>
  );
}
