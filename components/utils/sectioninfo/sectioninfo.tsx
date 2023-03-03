import Link from "next/link";
import styles from "./sectioninfo.module.css";

type Props = {
  title: string | any;
  more?: {
    path: string;
    text: string | any;
  };
};

export function SectionInfo({ title, more }: Props) {
  return (
    <div className={styles.info}>
      <h3 className={styles.title}>{title}</h3>
      {more ? (
        <Link href={more.path} className={styles.more_link}>
          {more.text}
        </Link>
      ) : null}
    </div>
  );
}
