import { ComponentProps } from "react";
import styles from "./Shared.module.scss";

interface IProps extends ComponentProps<"input"> {
  type: "number" | "string";
  costumClass?: string;
}

export default function Input({
  type = "number",
  costumClass,
  ...props
}: IProps) {
  return (
    <input
      type={type}
      {...props}
      className={`${styles.input} ${costumClass}`}
    />
  );
}
