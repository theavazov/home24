import { useContext, useState } from "react";
import { CategoriesContext } from "../../../contexts/categories";
import styles from "./catalogue.module.css";

export function Catalogue({ isCatalogue }: { isCatalogue: boolean }) {
  const { categories, isLooading } = useContext(CategoriesContext);

  const [toggleState, setToggleState] = useState(1);

  return (
    <div
      className={
        isCatalogue ? `${styles.mainMenu} ${styles.show}` : styles.mainMenu
      }
    >
      <div className={`${styles.mainMenu_inner} container`}></div>
      <div></div>
    </div>
  );
}
