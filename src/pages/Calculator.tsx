import Btn from "../component/Btn";
import Card from "../component/Card";
import Input from "../component/Input";
import { useRef, useState } from "react";
import { CgBackspace } from "react-icons/cg";
import { calculatorBtns } from "../constants";
import styles from "./Calculator.module.scss";

export default function Calculator() {
  const [inputValue, setinputValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const enteredValueRef = useRef<string[]>([]);

  const calculate = () => {
    try {
      setResultValue(eval(enteredValueRef.current.join("")));
    } catch (error: unknown) {
      console.log(error);
      setResultValue("");
    } finally {
      setinputValue(enteredValueRef.current.join(""));
    }
  };

  const handleClick = (value: string) => {
    switch (value) {
      case "clear":
        enteredValueRef.current = [];
        setResultValue("");
        setinputValue("");
        break;

      case "=":
        calculate();
        break;

      default:
        enteredValueRef.current.push(value);
        calculate();
        break;
    }
  };
  return (
    <Card bgSrc="/home.jpeg" title="Calculator">
      <section className="space-y-5">
        <Input value={inputValue} type="string" />
        <article className={styles.resultArticle}>
          <p>Result : {resultValue}</p>
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
