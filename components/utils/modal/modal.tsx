import { useContext, useEffect } from "react";
import { ModalContext } from "../../../contexts/modal";
import { xBtn } from "../../../public/icons";
import styles from "./modal.module.css";

export function Modal() {
  const { variant, setIsModal } = useContext(ModalContext); // check || feedback || success || view

  useEffect(() => {
    window.addEventListener("click", (e) => {
      const target = e.target as Element;
      if (target?.className === styles.modal) {
        setIsModal(false);
      } else if (target?.className === styles.modal_inner) {
        setIsModal(true);
      }
    });
  }, []);

  return (
    <div className={styles.modal}>
      <div className={styles.modal_inner}>
        <div className={styles.modal_top}>
          <p className={styles.modal_title}>
            {variant === "check"
              ? "Войти или создать профиль"
              : variant === "feedback"
              ? "Новый отзыв"
              : ""}
          </p>
          <button className={styles.xBtn} onClick={() => setIsModal(false)}>
            {xBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
