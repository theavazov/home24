import styles from "./fullbanner.module.css";
import Image from "next/image";
import Link from "next/link";
import googleplay from "../../../public/media/google-play.png";
import appstore from "../../../public/media/app-store.png";
import qr from "../../../public/media/qr.png";
import phone1 from "../../../public/media/fb-1.png";
import phone2 from "../../../public/media/fb-2.png";

export function FullBanner() {
  return (
    <section className="section">
      <div className={`container ${styles.fullBanner_container}`}>
        <div className={styles.fullBanner_inner}>
          <div className={styles.fullBanner_content}>
            <div className={styles.fullBanner_texts}>
              <p>Заказывайте в новом приложении Маркета и получайте бонусы</p>
              <p>Home24.uz скачать мобильное приложение</p>
            </div>
            <div className={styles.fullbanner_bottom}>
              <div className={styles.stores}>
                <Link href="#">
                  <Image src={googleplay} alt="Google Play" />
                </Link>
                <Link href="#">
                  <Image src={appstore} alt="App Store" />
                </Link>
              </div>
              <div className="qr_div">
                <div className="qr">
                  <Image src={qr} alt="qr code" />
                </div>
                <p className="qr_text">
                  Наведите камеру на QR-код, чтобы скачать
                </p>
              </div>
            </div>
          </div>
          <div className={styles.fullBanner_img}>
            <Image src={phone1} alt="Home 24 mobile app" />
            <Image src={phone2} alt="Home 24 mobile app" />
          </div>
        </div>
      </div>
    </section>
  );
}
