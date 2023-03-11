import Link from "next/link";
import styles from "./sidebar.module.css";
import { login, cart, logout } from "../../../public/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProfileNav() {
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname == "/profile/orders") {
      setStateNumber(1);
    } else if (pathname == "/profile") {
      setStateNumber(2);
    } else if (pathname == "/profile/edit") {
      setStateNumber(2);
    }
  }, [pathname]);

  const [stateNumber, setStateNumber] = useState(1);
  return (
    <aside className={styles.profileNav}>
      <Link
        href="/profile/orders"
        className={
          stateNumber === 1
            ? `${styles.profile_link} ${styles.active}`
            : styles.profile_link
        }
      >
        <div className={styles.icon_div}>{cart}</div>
        <p>Мои заказы</p>
      </Link>
      <Link
        href="/profile"
        className={
          stateNumber === 2
            ? `${styles.profile_link} ${styles.active}`
            : styles.profile_link
        }
      >
        <div className={styles.icon_div}>{login}</div>
        <p>Профиль</p>
      </Link>
      <button className={styles.profile_link}>
        <div className={styles.icon_div}>{logout}</div>
        <p>Выйти</p>
      </button>
    </aside>
  );
}
