import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./category.module.css";
import noimage from "../../../public/media/noimage.jpg";
import Link from "next/link";

type Props = {
  category: object | any;
  parent?: string | any;
};

export function CategoryCard({ category, parent }: Props) {
  const { locale } = useRouter();

  const title =
    locale === "uz"
      ? category.name.uz
      : locale === "ru"
      ? category.name.ru
      : locale === "uz"
      ? category.name.uz
      : "";

  return (
    <Link
      href={parent ? `/${parent}/subcategory` : "/slug"}
      className={styles.category}
    >
      <div className={styles.category_img}>
        <Image
          src={category.lg_img ? category.lg_img : noimage}
          alt={title}
          width={200}
          height={150}
        />
      </div>
      <div className={styles.category_content}>
        <p className={styles.category_name}>{title}</p>
      </div>
    </Link>
  );
}
