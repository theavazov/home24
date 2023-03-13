import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";
import { cart, heart, star } from "../../../public/icons";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ContentContext } from "../../../contexts/content";

type Props = {
  product: any;
};

export default function ProductCard({ product }: Props) {
  const { locale } = useRouter();
  const { orders, setOrders } = useContext(ContentContext);

  const saveStorage = () => {
    let ordersArray = [...orders];
    if (ordersArray && ordersArray.length) {
      let order = ordersArray.find((e) => {
        if (e.id == product.id) {
          e.count = e.count + 1;
          return e;
        }
      });
      if (!order) {
        product.count = 1;
        ordersArray.push(product);
      }
    } else {
      product.count = 1;
      ordersArray.push(product);
    }
    setOrders(ordersArray);
    localStorage.setItem("orders", JSON.stringify(ordersArray));
  };

  const name =
    locale === "ru"
      ? product?.info?.name.ru
      : locale === "uz"
      ? product?.info?.name.uz
      : locale === "en"
      ? product?.info?.name.uz
      : "";

  return (
    <Link href={`/product/${product.slug}`} className={styles.product}>
      <div className={styles.product_img}>
        <div className={styles.heart}>{heart}</div>
        <Image
          src={product?.images[0]?.md_img}
          alt={name}
          width={250}
          height={340}
          priority
        />
      </div>
      <div className={styles.product_info}>
        <div className={styles.info_top}>
          <div className={styles.product_prices_div}>
            <p className={styles.current_pice}>{product?.price}</p>
            <p className={styles.old_pice}>6 500 000 сум</p>
          </div>
          <button
            type="button"
            className={styles.cart_btn}
            onClick={saveStorage}
          >
            {cart}
          </button>
        </div>
        <div className={styles.product_rating}>
          {star}
          <span>5.0</span>
        </div>
        <p className={styles.info_desc}>{name}</p>
      </div>
    </Link>
  );
}
