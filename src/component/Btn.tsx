import styles from "./Shared.module.scss";
import { ComponentProps, ReactNode } from "react";

interface IProps extends ComponentProps<"button"> {
  children?: ReactNode;
  costumClass?: string
}

export default function Btn({ children, costumClass, ...props }: IProps) {
  return (
    <button {...props} className={`${costumClass} ${styles.button}`}>
      {children}
    </button>
  );
}
