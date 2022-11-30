import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { UserContext } from "../../contexts/UserContext";
import { bag, grid4, heart, home, login } from "../icons/icons";
import styles from "./Menu.module.css";

export default function Menu({ isCatalogue, setIsCatalogue }) {
  const router = useRouter();
  const pathname = router.pathname;

  const { setIsModal } = useContext(LoginContext);
  const { user } = useContext(UserContext);
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user"));
    if (storageUser !== null) {
      setIsUser(true);
    }
  }, []);
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
        <div
          className={styles.menu_item}
          role="button"
          onClick={() => {
            setIsCatalogue(!isCatalogue);
          }}
        >
          {grid4}
          <p>Категории</p>
        </div>
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

const UserLink = ({ pathname }) => {
  return (
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
  );
};

const ModalOpener = ({ setIsModal }) => {
  return (
    <div
      role={"button"}
      onClick={() => setIsModal(true)}
      className={styles.menu_item}
    >
      {login}
      <p>Войти</p>
    </div>
  );
};
