import { bag, heart, home, login, search } from "../icons/icons";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.menu_inner}>
        <div className={styles.menu_item}>
          {home}
          <p>Поиск</p>
        </div>
        <div className={styles.menu_item}>
          {search}
          <p>Поиск</p>
        </div>
        <div className={styles.menu_item}>
          {heart}
          <p>Избранное</p>
        </div>
        <div className={styles.menu_item}>
          {bag}
          <p>Корзина</p>
        </div>
        <div className={styles.menu_item}>
          {login}
          <p>Профиль</p>
        </div>
      </div>
    </div>
  );
}
