import { useRef, useState, useEffect } from "react";

export default function useCalculator() {
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
    return (
      value === "." ||
      (!isNaN(parseFloat(value)) && isFinite(parseFloat(value)))
    );
  };

  const addDigit = (value: string) => {
    const lastValue =
      enteredValueRef.current[enteredValueRef.current.length - 1];

    if (lastValue && isDigit(lastValue)) {
      if (lastValue.includes(".") && value === ".") {
        return;
      }

      if (lastValue === "0" && value !== ".") {
        enteredValueRef.current[enteredValueRef.current.length - 1] = value;
        calculate();
        return;
      }

      if (lastValue === "0." && value !== ".") {
        enteredValueRef.current[enteredValueRef.current.length - 1] =
          lastValue + value;
        calculate();
        return;
      }

      enteredValueRef.current[enteredValueRef.current.length - 1] =
        lastValue + value;
      calculate();
    } else {
      enteredValueRef.current.push(value);
      calculate();
    }
  };

  const addOperator = (value: string) => {
    const lastValue =
      enteredValueRef.current[enteredValueRef.current.length - 1];

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
  };

  const handleNegative = () => {
    const lastValue =
      enteredValueRef.current[enteredValueRef.current.length - 1];

    if (!lastValue) {
      enteredValueRef.current.push("-");
      calculate();
      return;
    }

    if (
      isDigit(lastValue) ||
      (lastValue.startsWith("-") && isDigit(lastValue.substring(1)))
    ) {
      const currentNumber = parseFloat(lastValue);
      const toggledNumber = Math.abs(currentNumber);
      enteredValueRef.current[enteredValueRef.current.length - 1] =
        `(-${toggledNumber})`;
      calculate();
      return;
    }

    if (lastValue.startsWith("(") && lastValue.endsWith(")")) {
      const innerValue = lastValue.slice(1, -1);

      if (innerValue.startsWith("-")) {
        const number = innerValue.slice(1);
        enteredValueRef.current[enteredValueRef.current.length - 1] = number;
      } else {
        enteredValueRef.current[enteredValueRef.current.length - 1] =
          `(-${innerValue})`;
      }
      calculate();
      return;
    }

    if (lastValue && !isOperator(lastValue)) {
      enteredValueRef.current[enteredValueRef.current.length - 1] =
        `(-${lastValue})`;
      calculate();
    }
    return;
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

      case "negative":
        handleNegative();
        break;

      default: {
        const lastValue =
          enteredValueRef.current[enteredValueRef.current.length - 1];

        if (isOperator(value)) {
          addOperator(value);
        } else if (isDigit(value)) {
          addDigit(value);
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
    const lastValue =
      enteredValueRef.current[enteredValueRef.current.length - 1];

    if (lastValue && lastValue.length > 1) {
      enteredValueRef.current[enteredValueRef.current.length - 1] =
        lastValue.slice(0, -1);
    } else {
      enteredValueRef.current = enteredValueRef.current.slice(0, -1);
    }
    calculate();
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.key;

    const preventDefaultKeys = [
      "Enter",
      "Escape",
      "Backspace",
      "+",
      "-",
      "*",
      "/",
      "(",
      ")",
      ".",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];

    if (preventDefaultKeys.includes(key)) {
      event.preventDefault();
    }

    if (
      /[0-9]/.test(key) ||
      key === "+" ||
      key === "-" ||
      key === "*" ||
      key === "/" ||
      key === "." ||
      key === "(" ||
      key === ")" ||
      key === "Enter" ||
      key === "Escape"
    ) {
      handleClick(key == "Enter" ? "=" : key == "Escape" ? "clear" : key);
    } else if (key === "Backspace") {
      handleBackspace();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return {
    inputValue,
    resultValue,
    enteredValueRef,
    handleClick,
    handleBackspace,
  };
}
