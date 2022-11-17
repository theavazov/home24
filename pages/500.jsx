import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FullBanner from "../components/fullBanner/FullBanner";
import Layout from "../components/layout/Layout";
import ServerErrorImage from "../media/500-img.png";

export default function ServerError() {
  return (
    <>
      <Head>
        <title>500 - Serverda Xato!</title>
      </Head>
      <Layout>
        <section>
          <div className="container error_container">
            <div className="errorImage">
              <Image src={ServerErrorImage} alt="Error Image" />
            </div>
            <dir className="error_content">
              <div className="error_texts">
                <p className="error_title">
                  Мы разберёмся с этим недоразумием, а пока вернитесь в главную
                  страницу
                </p>
              </div>
              <Link className="secondary_btn" href="/">
                На главную
              </Link>
            </dir>
          </div>
        </section>
        <FullBanner />
      </Layout>
    </>
  );
}
