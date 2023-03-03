import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FullBanner } from "../components/banners/fullbanner/fullbanner";
import { Layout } from "../components/layout/layout";
import errorImage from "../public/media/error-image.png";
import styles from "../styles/error.module.css";

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>404 - Bunday sahifa mavjud emas!</title>
      </Head>
      <Layout>
        <section>
          <div className={`container ${styles.error_container}`}>
            <div className={styles.errorImage}>
              <Image src={errorImage} alt="Error Image" />
            </div>
            <div className={styles.error_content}>
              <div className={styles.error_texts}>
                <p className={styles.error_title}>Страница не найдена!</p>
                <p className={styles.error_desc}>
                  Не переживайте и продолжайте покупку
                </p>
              </div>
              <Link href="/" className="secondary_btn">
                На главную
              </Link>
            </div>
          </div>
        </section>
        <FullBanner />
      </Layout>
    </>
  );
}
