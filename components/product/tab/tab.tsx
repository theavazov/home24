import { useState } from "react";
import { star } from "../../../public/icons";
import styles from "./tab.module.css";

export function ProductTab() {
  const [toggleState, setToggleState] = useState<string>("description");

  return (
    <div className={styles.productTab}>
      <div className={styles.buttons_div}>
        <button
          className={
            toggleState === "description"
              ? `${styles.button} ${styles.active}`
              : styles.button
          }
          onClick={() => setToggleState("description")}
        >
          Описание товара
        </button>
        <button
          className={
            toggleState === "feedbacks"
              ? `${styles.button} ${styles.active}`
              : styles.button
          }
          onClick={() => setToggleState("feedbacks")}
        >
          Отзывы (1)
        </button>
        <button
          className={
            toggleState === "characteristics"
              ? `${styles.button} ${styles.active}`
              : styles.button
          }
          onClick={() => setToggleState("characteristics")}
        >
          Характеристики
        </button>
      </div>
      {toggleState === "description" ? (
        <Opisaniye />
      ) : toggleState === "feedbacks" ? (
        <Otzivi />
      ) : toggleState === "characteristics" ? (
        <Xarakteristika />
      ) : (
        ""
      )}
    </div>
  );
}

const Opisaniye = () => {
  return (
    <div className={styles.opisaniye}>
      <p>
        Геймерские кресла 6206A-2 выполнено в сочетание фиолетового и черного.
        Модель выглядит элегантно и лаконично, поэтому она подойдет как в
        современный офис, так и в более консервативные заведения. Полозья
        выполнены из крепкого металла, при этом они разбираются, что очень
        удобно при сборке. Для более удобного долгого сидения сделаны широкие
        подлокотники из прочного пластика.
      </p>
      <p>
        Геймерские кресла 6206A-2 соответствует американскому стандарту Cougar,
        который создан компетентным техническим комитетом. Обивка выполнена из
        нескольких материалов - сидение сделано из дышащей ткани черного цвета
        для комфортного нахождения в кресле, а спинка из воздухопроницаемой
        сетки того же оттенка. Нагрузка на модель не может превышать 120 кг.
      </p>
    </div>
  );
};

const Otzivi = () => {
  return (
    <div className={styles.otzivi}>
      <SingleOtziv />
      <SingleOtziv />
    </div>
  );
};

const SingleOtziv = () => {
  return (
    <div className={styles.singleOtziv}>
      <p className={styles.singleOtziv_owner}>Shaxram G’iyosov</p>
      <div className={styles.singleOtziv_div}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {star}
          {star}
          {star}
          {star}
          {star}
        </div>
        <p>16 октября 2022 г.</p>
      </div>
      <p className={styles.singleOtziv_text}>
        Очень крутоe кресло, качество на высшем уровне. Рекомендую другим. Очень
        крутой кресло, качество на высшем уровне. Рекомендую другим.Очень крутой
        кресло, качество на высшем уровне. Рекомендую другим.Очень крутой
        кресло, качество на высшем уровне. Рекомендую другим.Очень крутой
        кресло, качество на высшем уровне. Рекомендую другим.
      </p>
    </div>
  );
};

const Xarakteristika = () => {
  return (
    <div className={styles.xarakteristika}>
      <Otrasl />
      <Otrasl />
      <Otrasl />
      <Otrasl />
      <Otrasl />
    </div>
  );
};

const Otrasl = () => {
  return (
    <div className={styles.otrasl}>
      <p className={styles.otrasl_title}>Основные характеристики</p>
      <div className={styles.otrasl_key_value_container}>
        <OtraslKeyValue />
        <OtraslKeyValue />
        <OtraslKeyValue />
        <OtraslKeyValue />
        <OtraslKeyValue />
        <OtraslKeyValue />
        <OtraslKeyValue />
      </div>
    </div>
  );
};

const OtraslKeyValue = () => {
  return (
    <div className={styles.otrasl_keyValue}>
      <p className={styles.otrasl_key}>Количество SIM-карт</p>
      <p className={styles.otrasl_value}>2</p>
    </div>
  );
};
