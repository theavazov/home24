import Image from "next/image";
import styles from "./ads.module.css";
import noimage from "../../../public/media/noimage.jpg";
import { useRouter } from "next/router";

export function AdsCard({ content }: { content: any }) {
  const { locale } = useRouter();

  const image =
    locale === "ru"
      ? content.md_img.ru
      : locale === "uz"
      ? content.md_img.uz
      : locale === "en"
      ? content.md_img.en
      : "";

  return (
    <div className={styles.card}>
      <Image
        src={image ? image : noimage}
        alt="advertising"
        className="image"
        width={390}
        height={300}
      />
    </div>
  );
}

export function AdsLoaderCard() {
  return <div className={`skeleton ${styles.loader}`}></div>;
}
