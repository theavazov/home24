import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FullBanner } from "../components/banners/fullbanner/fullbanner";
import { Layout } from "../components/layout/layout";
import ServerErrorImage from "../public/media/500-img.png";
import styles from "../styles/error.module.css";

export default function ServerError() {
  return (
    <>
      <Head>
        <title>500 - Serverda Xato!</title>
      </Head>
      <Layout>
        <section>
          <div className={`container ${styles.error_container}`}>
            <div className={styles.errorImage}>
              <Image src={ServerErrorImage} alt="Error Image" />
            </div>
            <div className={styles.error_content}>
              <div className={styles.error_texts}>
                <p className={styles.error_title}>
                  Мы разберёмся с этим недоразумием, а пока вернитесь в главную
                  страницу
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
