import styles from "./minifull.module.css";

type Props = {
  customClass?: string | any;
};

export function MiniFullBanner({ customClass }: Props) {
  return (
    <section className={customClass ? customClass : "section"}>
      <div className={styles.banner}>
        <div className={`box ${styles.banner_inner}`}></div>
      </div>
    </section>
  );
}
