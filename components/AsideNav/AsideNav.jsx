import Link from "next/link";
import styles from "./AsideNav.module.css";

export default function AsideNav() {
  return (
    <aside className={styles.aside}>
      <article className={styles.aside_nav}>
        <p className={styles.aside_nav_title}>Категории</p>
        <ul className={styles.categories_list}>
          <li>
            <Link href="/dynamic/gamers">Геймерские кресла</Link>
          </li>
          <li>
            <Link href="/dynamic/gamers">Геймерские кресла</Link>
          </li>
          <li>
            <Link href="/dynamic/gamers">Геймерские кресла</Link>
          </li>
          <li>
            <Link href="/dynamic/gamers">Геймерские кресла</Link>
          </li>
          <li>
            <Link href="/dynamic/gamers">Геймерские кресла</Link>
          </li>
          <li>
            <Link href="/dynamic/gamers">Геймерские кресла</Link>
          </li>
        </ul>
      </article>
    </aside>
  );
}
