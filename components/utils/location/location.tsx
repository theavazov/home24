import Link from "next/link";
import { arrowRight } from "../../../public/icons";
import styles from "./location.module.css";

type Props = {
  location: string | any;
  title?: string | any;
  category?: {
    title: string | any;
    path: string | any;
  };
  subcategory?: {
    title: string | any;
    path: string | any;
  };
  products?: string | any;
};

export function Location({
  title,
  location,
  category,
  subcategory,
  products,
}: Props) {
  return (
    <div className={styles.location}>
      <div className={styles.content}>
        <nav className={styles.location_nav}>
          <Link href={"/"} className={styles.node}>
            Главная
          </Link>
          <span className={styles.node}>{arrowRight}</span>
          {category ? (
            <>
              <Link href={category.path} className={styles.node}>
                {category.title}
              </Link>
              <span className={styles.node}>{arrowRight}</span>
            </>
          ) : null}
          {subcategory ? (
            <>
              <Link href={subcategory.path} className={styles.node}>
                {subcategory.title}
              </Link>
              <span className={styles.node}>{arrowRight}</span>
            </>
          ) : null}
          <p className={styles.node}>{location}</p>
        </nav>
        <h2 className={styles.title}>{title ? title : location}</h2>
      </div>
      {products ? <p>Товаров: {products}</p> : null}
    </div>
  );
}
