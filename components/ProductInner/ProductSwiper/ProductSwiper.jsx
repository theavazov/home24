import Image from "next/image";
import styles from "./ProductSwiper.module.css";
import kreslo from "../../../media/kreslo-gamer.png";
import { chat, star } from "../../icons/icons";

export default function ProductSwiper() {
  return (
    <div className={styles.productSwiper}>
      <div className={styles.swipers_container}>
        <aside className={styles.aside_swiper_container}>
          <div className={styles.overflowY_scrol}>
            <AsideSwiper />
            <AsideSwiper />
            <AsideSwiper />
            <AsideSwiper />
            <AsideSwiper />
            <AsideSwiper />
            <AsideSwiper />
          </div>
        </aside>
        <article className={styles.single_swiper}>
          <Image src={kreslo} alt="kreslo" />
        </article>
      </div>
      <div className={styles.product_info_container}>
        <div className={styles.product_info_top}>
          <div className={styles.info_top_div}>
            {star}
            <p>5</p>
          </div>
          <div className={styles.info_top_div}>
            {chat}
            <p>10 Отзывов</p>
          </div>
          <div className={styles.info_top_div}>
            <p>Код товара: </p>
            <p>1375043</p>
          </div>
        </div>
        <div className={styles.product_info_texts}>
          <p className={styles.products_name}>ОФИСНОЕ КРЕСЛО 6206A-2</p>
          <div className={styles.main_characteristichs}>
            <KeyValue />
            <KeyValue />
            <KeyValue />
          </div>
        </div>
        <div className={styles.product_info_bottom}>
          <p>Количество:</p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div className={styles.buy_btn_div}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <p>Осталось всего 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const KeyValue = () => {
  return (
    <div className={styles.keyValue}>
      <p className={styles.key}>Производитель:</p>
      <p className={styles.value}>Cougar</p>
    </div>
  );
};

const AsideSwiper = () => {
  return (
    <div className={styles.aside_swiper}>
      <Image src={kreslo} alt="aside swiper" />
    </div>
  );
};
