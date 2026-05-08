import { useState } from "react";
import Btn from "../component/Btn";
import Card from "../component/Card";
import Input from "../component/Input";
import { BiCheck, BiX } from "react-icons/bi";
import styles from "./PasswordGenerator.module.scss";

const rawOption = [
  {
    title: "Pattern (!@#)",
    isCheked: false,
  },
  {
    title: "Numbers (123)",
    isCheked: false,
  },
  {
    title: "UpperCase (ABC)",
    isCheked: false,
  },
];

export default function PasswordGenerator() {
  const [options, setOptions] = useState(rawOption);
  const [inputValue, setInputValue] = useState(8);
  const [password, setPassword] = useState("- - - - - - - -");

  const handlePasswordCheck = (index: number) => {
    const old = [...options];
    old[index].isCheked = !old[index].isCheked;
    setOptions(old);
  };
  const generatePassword = () => {
    setPassword(`New Password ${inputValue}`);
  };

  return (
    <Card bgSrc="/home.jpeg" title="Password Generator">
      <article className={styles.article}>
        <p>Password :</p>
        <p>{password}</p>
      </article>
      <Btn>Copy To Clipboard</Btn>
      <hr />
      <section className={styles.section}>
        {options.map((item, index) => (
          <p key={index} onClick={() => handlePasswordCheck(index)}>
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
        placeholder="Password Length"
        value={inputValue}
        onChange={(e) => setInputValue(parseFloat(e.target.value))}
      />
      <Btn onClick={generatePassword}>Generate Password</Btn>
    </Card>
  );
}
