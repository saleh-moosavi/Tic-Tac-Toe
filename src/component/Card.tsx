import { ReactNode } from "react";
import styles from "./Shared.module.scss";
import BlurBackGround from "./BlurBackGround";

export default function Card({
  title,
  bgSrc,
  children,
  noTitle = false,
  noBgColor = false,
}: {
  title: string;
  bgSrc: string;
  children: ReactNode;
  noTitle?: boolean;
  noBgColor?: boolean;
}) {
  return (
    <section className={styles.cardSection}>
      <BlurBackGround src={bgSrc} />
      <article className={!noBgColor ? styles.card : ""}>
        {!noTitle && <h3>{title}</h3>}
        {children}
      </article>
    </section>
  );
}
