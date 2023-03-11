import Link from "next/link";
import { useRouter } from "next/router";
import { bag, grid4, heart, home, login } from "../../../public/icons";
import styles from "./menu.module.css";

type Props = {
  isCatalogue: boolean;
  setIsCatalogue: Function;
};

export default function Menu({ isCatalogue, setIsCatalogue }: Props) {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className={styles.menu}>
      <div className={styles.menu_inner}>
        <Link
          href="/"
          className={
            pathname == "/"
              ? `${styles.menu_item} ${styles.active}`
              : styles.menu_item
          }
        >
          {home}
          <p>Главная</p>
        </Link>
        <Link
          href="/search"
          className={
            pathname == "/search"
              ? `${styles.menu_item} ${styles.active}`
              : styles.menu_item
          }
          role="button"
        >
          {grid4}
          <p>Категории</p>
        </Link>
        <Link
          href="/wishes"
          className={
            pathname == "/wishes"
              ? `${styles.menu_item} ${styles.active}`
              : styles.menu_item
          }
        >
          {heart}
          <p>Избранное</p>
        </Link>
        <Link
          href="/cart"
          className={
            pathname == "/cart"
              ? `${styles.menu_item} ${styles.active}`
              : styles.menu_item
          }
        >
          {bag}
          <p>Корзина</p>
        </Link>
        <Link
          href="/profile"
          className={
            pathname == "/profile"
              ? `${styles.menu_item} ${styles.active}`
              : styles.menu_item
          }
        >
          {login}
          <p>Профиль</p>
        </Link>
      </div>
    </div>
  );
}
