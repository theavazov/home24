import Head from "next/head";
import Link from "next/link";
import { Brand } from "./index";
import FullBanner from "../components/fullBanner/FullBanner";
import { arrowRight } from "../components/icons/icons";
import { Layout } from "../components/layout/layout";
import MiddleText from "../components/middleText/MiddleText";

export default function Brands() {
  return (
    <>
      <Head>
        <title>Home 24 | Brands</title>
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
                <p className="page_node_element">Популярные бренды</p>
              </div>
              <p className="page_main_title">Популярные бренды</p>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="grid6_brands">
              <Brand />
              <Brand />
              <Brand />
              <Brand />
              <Brand />
              <Brand />
              <Brand />
              <Brand />
              <Brand />
              <Brand />
              <Brand />
              <Brand />
              <Brand />
            </div>
          </div>
        </section>
        <MiddleText />
        <FullBanner />
      </Layout>
    </>
  );
}
