import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";
import kreslo from "../../../public/media/kresl-ofis.png";
import { cart, heart, star } from "../../../public/icons";
import { useRouter } from "next/router";

type Props = {
  product: any;
};

export default function ProductCard({ product }: Props) {
  const { locale } = useRouter();

  const name =
    locale === "ru"
      ? product?.info?.name.ru
      : locale === "uz"
      ? product?.info?.name.uz
      : locale === "en"
      ? product?.info?.name.uz
      : "";

  return (
    <Link href="/dynamic/gamer/kreslo" className={styles.product}>
      <div className={styles.product_img}>
        <div className={styles.heart}>{heart}</div>
        <Image
          src={product?.images[0]?.lg_img}
          alt={name}
          width={250}
          height={340}
        />
      </div>
      <div className={styles.product_info}>
        <div className={styles.info_top}>
          <div className={styles.product_prices_div}>
            <p className={styles.current_pice}>{product?.price}</p>
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
        <p className={styles.info_desc}>{name}</p>
      </div>
    </Link>
  );
}
