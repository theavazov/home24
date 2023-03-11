import styles from "./minifull.module.css";
import Image from "next/image";
import googleplay from "../../../public/media/google-play.png";
import appstore from "../../../public/media/app-store.png";
import qr from "../../../public/media/qr.png";

type Props = {
  customClass?: string | any;
};

export function MiniFullBanner({ customClass }: Props) {
  return (
    <section className={customClass ? customClass : "section"}>
      <div className={styles.banner}>
        <div className={`container ${styles.banner_inner}`}>
          <div className={styles.inner1}>
            <p className={styles.inner_title}>
              Заказывайте в новом приложении Маркета и получайте бонусы
            </p>
            <p className={styles.inner_desc}>
              Home24.uz скачать мобильное приложение
            </p>
          </div>
          <div className={styles.inner2}>
            <a href="#" target={"_blank"} rel="noreferrer">
              <Image src={googleplay} alt="googleplay" />
            </a>
            <a href="#" target={"_blank"} rel="noreferrer">
              <Image src={appstore} alt="googleplay" />
            </a>
          </div>
          <div className="qr_div">
            <div className="qr">
              <Image src={qr} alt="qr" />
            </div>
            <p className="qr_text">Наведите камеру на QR-код, чтобы скачать</p>
          </div>
        </div>
      </div>
    </section>
  );
}
