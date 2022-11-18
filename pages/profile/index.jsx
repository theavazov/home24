import Head from "next/head";
import Link from "next/link";
import FullBanner from "../../components/fullBanner/FullBanner";
import { arrowRight } from "../../components/icons/icons";
import Layout from "../../components/layout/Layout";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Layout>
        <section>
          <div className="container">
            <div className="main_text_content">
              <div className="page_node">
                <Link href="/" className="page_node_element active">
                  Главная
                </Link>
                {arrowRight}
                <p className="page_node_element">Личный кабинет</p>
              </div>
              <p className="page_main_title">Личный кабинет</p>
            </div>
          </div>
        </section>
        <FullBanner />
      </Layout>
    </>
  );
}
