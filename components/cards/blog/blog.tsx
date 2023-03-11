import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";
import noimage from "../../../public/media/noimage.jpg";
import { useRouter } from "next/router";

export function BlogCard({ blog }: { blog: any }) {
  const { locale } = useRouter();

  const title =
    locale === "ru"
      ? blog?.title.ru
      : locale === "uz"
      ? blog?.title.uz
      : locale === "en"
      ? blog?.title.uz
      : "";

  return (
    <Link href={`/blog/${blog.slug}`} className={styles.card}>
      <p>{title}</p>
      <Image
        src={blog.sm_img ? blog.sm_img : noimage}
        alt={title}
        width={390}
        height={280}
        className="image"
      />
    </Link>
  );
}

// blog.lg_img ? blog.lg_img : noimage;
