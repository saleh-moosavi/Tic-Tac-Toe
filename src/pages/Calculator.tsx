import Btn from "../component/Btn";
import Card from "../component/Card";
import Input from "../component/Input";
import { CgBackspace } from "react-icons/cg";
import { calculatorBtns } from "../constants";
import styles from "./Calculator.module.scss";
import useCalculator from "../hooks/useCalculator";

export default function Calculator() {
  const { inputValue, resultValue, handleClick, handleBackspace } =
    useCalculator();

  return (
    <Card bgSrc="/home.jpeg" title="Calculator">
      <section className="space-y-5">
        <Input
          value={inputValue}
          type="string"
          onChange={(e) => handleClick(e.target.value)}
        />
        <article className={styles.resultArticle}>
          <p>Result : {resultValue}</p>
          <p onClick={handleBackspace} style={{ cursor: "pointer" }}>
            <CgBackspace className="size-4" />
          </p>
        </article>
        <article className={styles.buttonsArticle}>
          {calculatorBtns.map((key) => (
            <Btn onClick={() => handleClick(key.value)} key={key.id}>
              {key.icon}
            </Btn>
          ))}
        </article>
      </section>
    </Card>
  );
}
