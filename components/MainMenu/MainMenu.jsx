import styles from "./MainMenu.module.css";

export default function MainMenu({ isCatalogue }) {
  return (
    <div
      className={
        isCatalogue ? `${styles.mainMenu} ${styles.show}` : styles.mainMenu
      }
    ></div>
  );
}
