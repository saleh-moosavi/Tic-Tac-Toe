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

  const calculate = (isEqual?: boolean) => {
    try {
      const res = eval(enteredValueRef.current.join(""));
      setResultValue(res);
      if (isEqual === true && res) {
        enteredValueRef.current = [res.toString()];
      }
    } catch (error: unknown) {
      console.log(error);
      setResultValue("");
    } finally {
      setinputValue(enteredValueRef.current.join(""));
    }
  };

  const isOperator = (value: string) => {
    return ["+", "-", "*", "/"].includes(value);
  };

  const isDigit = (value: string) => {
    return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(
      value,
    );
  };

  const handleClick = (value: string) => {
    switch (value) {
      case "clear":
        enteredValueRef.current = [];
        setResultValue("");
        setinputValue("");
        break;

      case "=":
        calculate(true);
        break;

      default: {
        const lastValue =
          enteredValueRef.current[enteredValueRef.current.length - 1];

        if (isOperator(value)) {
          if (lastValue === "(") {
            return;
          }

          if (isOperator(lastValue)) {
            enteredValueRef.current[enteredValueRef.current.length - 1] = value;
            calculate();
            return;
          }
          if (
            enteredValueRef.current.length === 0 ||
            (value !== "-" && lastValue === "(")
          ) {
            return;
          }

          if (value === "-" && isOperator(lastValue)) {
            enteredValueRef.current.push(value);
            calculate();
            return;
          }

          enteredValueRef.current.push(value);
          calculate();
        } else if (isDigit(value)) {
          if (value === ".") {
            let lastNumber = "";
            for (let i = enteredValueRef.current.length - 1; i >= 0; i--) {
              const item = enteredValueRef.current[i];
              if (isOperator(item) || item === "(" || item === ")") {
                break;
              }
              lastNumber = item + lastNumber;
            }

            if (lastNumber.includes(".")) {
              return;
            }
          }

          enteredValueRef.current.push(value);
          calculate();
        } else if (value === "(") {
          if (
            enteredValueRef.current.length === 0 ||
            isOperator(lastValue) ||
            lastValue === "("
          ) {
            enteredValueRef.current.push(value);
            calculate();
          }
        } else if (value === ")") {
          const openCount = enteredValueRef.current.filter(
            (v) => v === "(",
          ).length;
          const closeCount = enteredValueRef.current.filter(
            (v) => v === ")",
          ).length;

          if (
            openCount > closeCount &&
            !isOperator(lastValue) &&
            lastValue !== "("
          ) {
            enteredValueRef.current.push(value);
            calculate();
          }
        }
        break;
      }
    }
  };

  const handleBackspace = () => {
    enteredValueRef.current = enteredValueRef.current.slice(0, -1);
    calculate();
  };

  return (
    <Card bgSrc="/home.jpeg" title="Calculator">
      <section className="space-y-5">
        <Input value={inputValue} type="string" />
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
