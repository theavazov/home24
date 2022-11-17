import Link from "next/link";
import styles from "./Product.module.css";

export const Product = () => {
  return (
    <Link href="#" className={styles.product}>
      <div className={styles.product_img}> </div>
      <div className={styles.product_info}></div>
    </Link>
  );
};
