import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import styles from "./Home.module.scss";
import BlurBackGround from "../component/BlurBackGround";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <BlurBackGround src="/home.jpeg" />
      <section className={styles.section}>
        <h2 className={styles.title}>Welcome to Hobby Verse</h2>
        <article className={styles.article}>
          {navLinks.map((item) =>
            item.id === 0 ? null : (
              <Link key={item.id} to={item.href} className={styles.link}>
                {item.title}
              </Link>
            )
          )}
        </article>
      </section>
    </div>
  );
}
