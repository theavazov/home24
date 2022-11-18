import Link from "next/link";
import styles from "./Product.module.css";

export function Product() {
  return (
    <Link href="/dynamic/gamer/kreslo" className={styles.product}>
      <div className={styles.product_img}> </div>
      <div className={styles.product_info}></div>
    </Link>
  );
}
