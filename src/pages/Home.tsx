import Btn from "../component/Btn";
import Card from "../component/Card";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <Card bgSrc="/home.jpeg" title="Welcome to Hobby Verse">
      <article className={styles.article}>
        {navLinks.map((item) =>
          item.id === 0 ? null : (
            <Btn>
              <Link key={item.id} to={item.href}>
                {item.title}
              </Link>
            </Btn>
          ),
        )}
      </article>
    </Card>
  );
}
