import Image from "next/image";
import styles from "./content.module.css";
import kreslo from "../../../public/media/kreslo-gamer.png";
import kresloOfis from "../../../public/media/kresl-ofis.png";
import { chat, star } from "../../../public/icons";
import { useState } from "react";

export default function ProductSwiper() {
  const [src, setSrc] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className={styles.productSwiper}>
      <div className={styles.swipers_container}>
        <aside className={styles.aside_swiper_container}>
          <div className={styles.overflowY_scrol}>
            <AsideSwiper src={src} setSrc={setSrc} />
            <AsideSwiper2 src={src} setSrc={setSrc} />
            <AsideSwiper2 src={src} setSrc={setSrc} />
            <AsideSwiper2 src={src} setSrc={setSrc} />
            <AsideSwiper2 src={src} setSrc={setSrc} />
            <AsideSwiper2 src={src} setSrc={setSrc} />
            <AsideSwiper2 src={src} setSrc={setSrc} />
            <AsideSwiper2 src={src} setSrc={setSrc} />
            <AsideSwiper2 src={src} setSrc={setSrc} />
            <AsideSwiper2 src={src} setSrc={setSrc} />
            <AsideSwiper2 src={src} setSrc={setSrc} />
            <AsideSwiper2 src={src} setSrc={setSrc} />
            <AsideSwiper2 src={src} setSrc={setSrc} />
            <AsideSwiper2 src={src} setSrc={setSrc} />
            <AsideSwiper2 src={src} setSrc={setSrc} />
            <AsideSwiper2 src={src} setSrc={setSrc} />
          </div>
        </aside>
      </div>
      <div className={styles.product_big_container}>
        <div className={styles.single_swiper}>
          <Image
            src={src === 1 ? kreslo : src === 2 ? kresloOfis : ""}
            alt="kreslo"
            fill
          />
        </div>
        <div className={styles.product_info_container}>
          <div className={styles.product_info_top}>
            <div className={styles.info_top_div}>
              {star}
              <p>5</p>
            </div>
            <div className={styles.info_top_div}>
              {chat}
              <p>10 ??????????????</p>
            </div>
            <div className={styles.info_top_div}>
              <p>?????? ????????????: </p>
              <p>1375043</p>
            </div>
          </div>
          <div className={styles.product_info_texts}>
            <p className={styles.products_name}>?????????????? ???????????? 6206A-2</p>
            <div className={styles.main_characteristichs}>
              <KeyValue />
              <KeyValue />
              <KeyValue />
            </div>
          </div>
          <div className={styles.product_info_bottom}>
            <p>????????????????????:</p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div className={styles.buy_btn_div}>
                <button
                  onClick={() => (count - 1 >= 0 ? setCount(count - 1) : count)}
                >
                  -
                </button>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
              </div>
              <p>???????????????? ?????????? 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const KeyValue = () => {
  return (
    <div className={styles.keyValue}>
      <p className={styles.key}>??????????????????????????:</p>
      <p className={styles.value}>Cougar</p>
    </div>
  );
};

type AsideSwiper = {
  src: string | any;
  setSrc: Function;
};

const AsideSwiper = ({ src, setSrc }: AsideSwiper) => {
  return (
    <div
      role={"button"}
      className={
        src === 1
          ? `${styles.aside_swiper} ${styles.active}`
          : styles.aside_swiper
      }
      onClick={() => setSrc(1)}
    >
      <Image src={kreslo} alt="aside swiper" fill />
    </div>
  );
};

const AsideSwiper2 = ({ src, setSrc }: AsideSwiper) => {
  return (
    <div
      role={"button"}
      className={
        src === 2
          ? `${styles.aside_swiper} ${styles.active}`
          : styles.aside_swiper
      }
      onClick={() => setSrc(2)}
    >
      <Image src={kresloOfis} alt="aside swiper" fill />
    </div>
  );
};
