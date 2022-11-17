import Image from "next/image";
import Link from "next/link";
import styles from "./NoneComponent.module.css";

export const NoneComponent = ({ info }) => {
  return (
    <div className={styles.noneComponent}>
      <Image className={styles.mainImage} src={info.image} alt={info.title} />
      <div className={styles.text_div}>
        <p className={styles.title}>{info.title}</p>
        <p className={styles.desc}>{info.desc}</p>
      </div>
      <Link href="/" className="secondary_btn">
        На главную
      </Link>
    </div>
  );
};
