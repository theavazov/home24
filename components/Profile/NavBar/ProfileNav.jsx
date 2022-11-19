import Link from "next/link";
import styles from "./ProfileNav.module.css";
import { login, cart, logout } from "../../icons/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProfileNav() {
  const [isLogout, setIsLogout] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.pathname == "/profile") {
      setStateNumber(1);
    } else if (router.pathname == "/profile/orders") {
      setStateNumber(2);
    }
  }, [router.pathname]);
  const [stateNumber, setStateNumber] = useState(1);
  return (
    <aside className={styles.profileNav}>
      <Link
        href="/profile"
        className={
          stateNumber === 1
            ? `${styles.profile_link} ${styles.active}`
            : styles.profile_link
        }
      >
        <div className={styles.icon_div}>{login}</div>
        <p>Профиль</p>
      </Link>
      <Link
        href="/profile/orders"
        className={
          stateNumber === 2
            ? `${styles.profile_link} ${styles.active}`
            : styles.profile_link
        }
      >
        <div className={styles.icon_div}>{cart}</div>
        <p>Мои заказы</p>
      </Link>
      <button className={styles.profile_link} onClick={() => setIsLogout(true)}>
        <div className={styles.icon_div}>{logout}</div>
        <p>Выйти</p>
      </button>
      {isLogout && <Logout setIsLogout={setIsLogout} />}
    </aside>
  );
}

const Logout = ({ setIsLogout }) => {
  const router = useRouter();
  const onSave = () => {
    localStorage.removeItem("user");
    setIsLogout(false);
    router.push("/");
  };
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.className.includes("modal")) {
        setIsLogout(false);
      } else if (e.target.className.includes("modal_content")) {
        setIsLogout(true);
      }
    });
  }, [setIsLogout]);
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_content_header}>
          <p className={styles.modal_content_headerText}>
            Сохранить перед выходом ?
          </p>
          <div
            role={"button"}
            className={styles.modalCloser}
            onClick={() => setIsLogout(false)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.modal_content_body}>
          <button type="button" onClick={() => setIsLogout(false)}>
            Отменить
          </button>
          <button type="button" onClick={onSave}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};
