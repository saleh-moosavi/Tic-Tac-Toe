import styles from "./Shared.module.scss";
import { ComponentProps, ReactNode } from "react";

interface IProps extends ComponentProps<"button"> {
  children?: ReactNode;
}

export default function Btn({ children, ...props }: IProps) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
}
