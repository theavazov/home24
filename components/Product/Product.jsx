import Image from "next/image";
import Link from "next/link";
import styles from "./Product.module.css";
// import kreslo from "../../media/kreslo-gamer.png";
import kreslo from "../../media/kresl-ofis.png";
import { cart, star } from "../icons/icons";

export default function Product() {
  return (
    <Link href="/dynamic/gamer/kreslo" className={styles.product}>
      <div className={styles.product_img}>
        <Image src={kreslo} alt="Kreslo" />
      </div>
      <div className={styles.product_info}>
        <div className={styles.info_top}>
          <div className={styles.product_prices_div}>
            <p className={styles.current_pice}>6 187 000 сум</p>
            <p className={styles.old_pice}>6 500 000 сум</p>
          </div>
          <button type="button" className={styles.cart_btn}>
            {cart}
          </button>
        </div>
        <div className={styles.product_rating}>
          {star}
          <span>5.0</span>
        </div>
        <p className={styles.info_desc}>
          Руководительский набор Optima комплект
        </p>
      </div>
    </Link>
  );
}
