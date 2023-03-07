import Link from "next/link";
import styles from "./ProfileNav.module.css";
import { login, cart, logout } from "../../../public/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProfileNav({ setIsLogout }) {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname == "/profile/orders") {
      setStateNumber(1);
    } else if (router.pathname == "/profile") {
      setStateNumber(2);
    } else if (router.pathname == "/profile/edit") {
      setStateNumber(2);
    }
  }, [router.pathname]);
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
      <button className={styles.profile_link} onClick={() => setIsLogout(true)}>
        <div className={styles.icon_div}>{logout}</div>
        <p>Выйти</p>
      </button>
    </aside>
  );
}
