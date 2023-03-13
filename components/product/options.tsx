import Image from "next/image";
import { cart, hand, heart, swap } from "../../public/icons";
import styles from "../../styles/product.module.css";
import dostavka from "../../public/media/dostavka.png";
import assistent from "../../public/media/expert.png";

export function Options() {
  return (
    <div className={styles.product_buy_container}>
      <div className={styles.sticky_options}>
        <div className={styles.option_div}>
          <div className={styles.option_div_container}>
            <div className={styles.prices_div}>
              <p className={styles.current_price}>25 880 000 СУМ</p>
              <p className={styles.old_price}>2 880 000 СУМ</p>
            </div>
            <div className={styles.svg_div}>
              <button className={styles.active}>{swap}</button>
              <button>{heart}</button>
            </div>
          </div>
          <div className={styles.option_div_btns}>
            <button type="button" className="primary_btn">
              {cart} <span>Добавить в корзину</span>
            </button>
            <button type="button" className="secondary_btn">
              {hand} <span>Купить в один клик</span>
            </button>
          </div>
        </div>
        <div className={styles.other_options_div}>
          <div className={styles.other_option}>
            <p className={styles.other_option_title}>Доставка</p>
            <p className={styles.other_option_desc}>
              Доставка к курьером на дом
            </p>
            <Image src={dostavka} alt="dostavka" />
          </div>
          <div className={styles.other_option}>
            <p className={styles.other_option_title}>
              Обратитесь к специалисту!
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "30px",
              }}
            >
              <p className={styles.other_option_desc}>
                Служба поддержки: <br />
                (998-71) 200-7-002
              </p>
              <p className={styles.estvoprosi}>ЕСТЬ ВОПРОСЫ?</p>
            </div>
            <Image src={assistent} alt="dostavka" />
          </div>
        </div>
      </div>
    </div>
  );
}
