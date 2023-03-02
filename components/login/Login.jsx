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

  const [number, setNumber] = useState("");
  const [isValidate, setIsValidate] = useState(true);

  const saveUser = () => {
    if (number == "(99) 121 28 21") {
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

  // useEffect(() => {
  //   window.addEventListener("click", (e) => {
  //     if (e.target.className.includes("loginModal")) {
  //       setIsModal(false);
  //     } else if (e.target.className.includes("loginContent")) {
  //       setIsModal(true);
  //     }
  //   });
  // }, [setIsModal]);

  return (
    <div className={styles.loginModal}>
      <div className={styles.loginContent}>
        <div className={styles.loginContent_header}>
          <p className={styles.loginContent_headerText}>
            Войти или создать профиль
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styles.loginCloser}
            role={"button"}
            onClick={() => setIsModal(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <form className={styles.login_form} onSubmit={saveUser}>
          <div
            className={
              isValidate
                ? `${styles.label_inp_div}`
                : `${styles.label_inp_div} ${styles.label_inp_div_red}`
            }
          >
            <label htmlFor="phone">Номер телефонa</label>
            <div className={styles.yolgon_input}>
              <span>+998</span>
              <IMaskInput
                ref={numberRef}
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                autoFocus={true}
                type="text"
                id="phone"
                mask={"(00) 000 00 00"}
                placeholder="(__) ___ __ __"
                className={
                  isValidate ? "" : "animate__animated animate__headShake"
                }
              />
            </div>
          </div>
          <button type="button" className="primary_btn">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
