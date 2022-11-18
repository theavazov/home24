import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { IMaskInput } from "react-imask";
import { LoginContext } from "../../contexts/LoginContext";
import { UserContext } from "../../contexts/UserContext";
import styles from "./Login.module.css";
import "animate.css";

export default function LoginModal() {
  const router = useRouter();
  const { setIsModal } = useContext(LoginContext);
  const { setUser } = useContext(UserContext);
  const numberRef = useRef();

  const [number, setNumber] = useState("+998 ");
  const [isValidate, setIsValidate] = useState(true);

  const saveUser = () => {
    if (number == "+998 (99) 121 28 21") {
      const user = {
        name: "Admin",
        number: number,
      };
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      setIsModal(false);
      if (router.pathname == "/") {
        router.reload(window.location.pathname);
      } else {
        router.push("/");
      }
    } else {
      setIsValidate(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.className.includes("loginModal")) {
        setIsModal(false);
      } else if (e.target.className.includes("loginContent")) {
        setIsModal(true);
      }
    });
  }, []);
  return (
    <div className={styles.loginModal}>
      <div className={styles.loginContent}>
        <div className={styles.loginContent_header}>
          <p className={styles.loginContent_headerText}>
            Войти или создать профиль
          </p>
          <div
            role={"button"}
            className={styles.loginCloser}
            onClick={() => setIsModal(false)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
        <form className={styles.login_form}>
          <div
            className={
              isValidate
                ? `${styles.label_inp_div}`
                : `${styles.label_inp_div} ${styles.label_inp_div_red}`
            }
          >
            <label htmlFor="phone">Номер телефонa</label>
            <IMaskInput
              ref={numberRef}
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              type="text"
              id="phone"
              // +998 ni srazi qoyb beriw kere
              mask={"+998 (00) 000 00 00"}
              placeholder="+998 (__) ___ __ __"
              className={
                isValidate ? "" : "animate__animated animate__headShake"
              }
            />
          </div>
          <button type="button" className="primary_btn" onClick={saveUser}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
