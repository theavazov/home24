import Head from "next/head";
import Link from "next/link";
import AsideNav from "../../../components/AsideNav/AsideNav";
import FullBanner from "../../../components/fullBanner/FullBanner";
import { arrowRight } from "../../../components/icons/icons";
import Layout from "../../../components/layout/Layout";
import MiddleText from "../../../components/middleText/MiddleText";
import { Product } from "../../../components/Product/Product";

export default function SubcategoryPage() {
  return (
    <>
      <Head>
        <title>Home24 | Mebel | Gamer kreslo</title>
      </Head>
      <Layout>
        <section>
          <div className="container main_flex_content">
            <AsideNav />
            <div id="mainContent" style={{ flex: "1 1 auto" }}>
              <div className="main_text_content">
                <div className="page_node">
                  <Link href="/" className="page_node_element active">
                    Главная
                  </Link>
                  {arrowRight}
                  <Link href="/dynamic" className="page_node_element active">
                    Мебель
                  </Link>
                  {arrowRight}
                  <p className="page_node_element">Геймерские кресла</p>
                </div>
                <p className="page_main_title">Геймерские кресла </p>
              </div>
              <section className="products_grid">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </section>
            </div>
          </div>
        </section>
        <MiddleText />
        <FullBanner />
      </Layout>
    </>
  );
}
