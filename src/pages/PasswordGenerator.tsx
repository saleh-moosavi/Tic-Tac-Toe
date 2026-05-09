import { useState } from "react";
import Btn from "../component/Btn";
import Card from "../component/Card";
import Input from "../component/Input";
import { BiCheck, BiX } from "react-icons/bi";
import styles from "./PasswordGenerator.module.scss";

const rawOption = [
  {
    title: "UpperCase (ABC)",
    isCheked: false,
    key: "uppercase",
  },
  {
    title: "Numbers (123)",
    isCheked: false,
    key: "numbers",
  },
  {
    title: "Symbols (!@#)",
    isCheked: false,
    key: "symbols",
  },
];

export default function PasswordGenerator() {
  const [options, setOptions] = useState(rawOption);
  const [inputValue, setInputValue] = useState(8);
  const [password, setPassword] = useState("- - - - - - - -");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:',.<>?/`~",
  };

  const handleOptionChanges = (index: number) => {
    const prevOptions = [...options];
    prevOptions[index].isCheked = !prevOptions[index].isCheked;
    setOptions(prevOptions);
  };

  const getRandomChar = (type: string): string => {
    const chars = characters[type];
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const generatePassword = () => {
    const selectedOptions = options.filter((opt) => opt.isCheked);
    const allSelectedKeys = [
      "lowercase",
      ...selectedOptions.map((opt) => opt.key),
    ];

    const length = inputValue;
    if (length < 4 || length > 64) {
      setError("Password Must Be Between 4 to 64");
      return;
    }

    setError("");
    const passwordArray: string[] = [];

    passwordArray.push(getRandomChar("lowercase"));

    selectedOptions.forEach((option) => {
      passwordArray.push(getRandomChar(option.key));
    });

    while (passwordArray.length < length) {
      const randomKey =
        allSelectedKeys[Math.floor(Math.random() * allSelectedKeys.length)];
      passwordArray.push(getRandomChar(randomKey));
    }

    for (let i = passwordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [passwordArray[i], passwordArray[j]] = [
        passwordArray[j],
        passwordArray[i],
      ];
    }

    setPassword(passwordArray.join(""));
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (password && password !== "- - - - - - - -") {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Card bgSrc="/home.jpeg" title="Password Generator">
      <article className={styles.article}>
        <p className={styles.label}>Password :</p>
        <p className={styles.password}>{password}</p>
      </article>

      <Btn onClick={copyToClipboard}>
        {copied ? "Copied ✓" : "Copy To Clipboard"}
      </Btn>

      <hr />

      <section className={styles.section}>
        {options.map((item, index) => (
          <p key={index} onClick={() => handleOptionChanges(index)}>
            <Btn
              costumClass={
                item.isCheked ? styles.isChecked : styles.isNotChecked
              }
            >
              {item.isCheked ? <BiCheck /> : <BiX />}
            </Btn>
            {item.title}
          </p>
        ))}
      </section>

      <Input
        type="number"
        placeholder="Password Length (4-64)"
        value={inputValue}
        onChange={(e) => setInputValue(parseInt(e.target.value) || 8)}
        min={4}
        max={64}
      />

      {error && <p className={styles.error}>{error}</p>}

      <Btn onClick={generatePassword}>Generate Password</Btn>
    </Card>
  );
}
