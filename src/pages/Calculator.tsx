import Btn from "../component/Btn";
import Card from "../component/Card";
import Input from "../component/Input";
import { CgBackspace } from "react-icons/cg";
import { calculatorBtns } from "../constants";
import styles from "./Calculator.module.scss";
import { useRef, useState } from "react";

export default function Calculator() {
  const [inputValue, setinputValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const enteredValueRef = useRef<string[]>([]);

  const handleClick = (value: string) => {
    enteredValueRef.current.push(value);
    if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(value)) {
      setResultValue(eval(enteredValueRef.current.join("")));
    } else {
      setResultValue("");
    }
    setinputValue(enteredValueRef.current.join(""));
  };
  return (
    <Card bgSrc="/home.jpeg" title="Calculator">
      <section className="space-y-5">
        <Input value={inputValue} type="string" />
        <article className={styles.resultArticle}>
          <p>{resultValue}</p>
          <p>
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
