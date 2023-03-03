import Image from "next/image";
import Link from "next/link";
import styles from "./brand.module.css";
import noimage from "../../../public/media/noimage.jpg";
import { useRouter } from "next/router";

export function BrandCard({ brand }: { brand: any }) {
  const { pathname } = useRouter();

  return (
    <Link href={`/brands/slug`} className={styles.card}>
      <div className={styles.image}>
        {brand.lg_logo ? (
          <Image
            src={brand.lg_logo}
            alt={brand.name ? brand.name : "brand"}
            className={styles.card_img}
            width={150}
            height={150}
          />
        ) : (
          <Image
            src={noimage}
            alt={brand.name ? brand.name : "brand"}
            className="image"
          />
        )}
      </div>
      <p style={{ display: pathname === "/" ? "none" : "" }}>
        {brand.name ? brand.name : "Brand"}
      </p>
    </Link>
  );
}
