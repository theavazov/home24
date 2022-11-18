import Link from "next/link";
import styles from "./Category.module.css";
import mebel from "../../media/mebel-category-image.png";
import Image from "next/image";

export const Category = () => {
  return (
    <Link href="/dynamic" className={styles.category}>
      <div className={styles.category_img}>
        <Image src={mebel} alt="category mebel" />
      </div>
      <div className={styles.category_content}>
        <p className={styles.category_name}>Мебель</p>
      </div>
    </Link>
  );
};
