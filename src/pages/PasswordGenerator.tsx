import Btn from "../component/Btn";
import Card from "../component/Card";
import Input from "../component/Input";
import { BiCheck, BiX } from "react-icons/bi";
import styles from "./PasswordGenerator.module.scss";
import usePasswordGenerator from "../hooks/usePasswordGenerator";

export default function PasswordGenerator() {
  const {
    error,
    copied,
    options,
    password,
    inputValue,
    setInputValue,
    copyToClipboard,
    generatePassword,
    handleOptionChanges,
  } = usePasswordGenerator();

  return (
    <Card bgSrc="/password-generator.jpg" title="Password Generator">
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
