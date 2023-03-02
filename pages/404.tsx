import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FullBanner from "../components/fullBanner/FullBanner";
import { Layout } from "../components/layout/layout";
import errorImage from "../media/error-image.png";

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>404 - Bunday sahifa mavjud emas!</title>
      </Head>
      <Layout>
        <section>
          <div className="container error_container">
            <div className="errorImage">
              <Image src={errorImage} alt="Error Image" />
            </div>
            <div className="error_content">
              <div className="error_texts">
                <p className="error_title">Страница не найдена!</p>
                <p className="error_desc">
                  Не переживайте и продолжайте покупку
                </p>
              </div>
              <Link className="secondary_btn" href="/">
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
