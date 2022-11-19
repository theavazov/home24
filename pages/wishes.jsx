import Head from "next/head";
import Link from "next/link";
import FullBanner from "../components/fullBanner/FullBanner";
import { arrowRight } from "../components/icons/icons";
import Layout from "../components/layout/Layout";
import MiddleText from "../components/middleText/MiddleText";
import { NoneComponent } from "../components/NoneComponent/NoneComponent";
import Product from "../components/Product/Product";
import image from "../media/wishes-img.png";

export default function Wishes() {
  const info = {
    title: "В избранном пока ничего нет",
    desc: "Вы можете добавлять товары кликая на сердечко, которое ноходится прямо на карточке товара ",
    image: image,
  };
  return (
    <>
      <Head>
        <title>Home 24 | Izbranniy</title>
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
                <p className="page_node_element">Избранное</p>
              </div>
              <p className="page_main_title">Избранное</p>
            </div>
            <NoneComponent info={info} />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="titles_div">
              <p className="category_title">Хиты продаж</p>
              <Link href="#" className="category_view_all">
                Все товары
              </Link>
            </div>
            <div className="products_grid">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </section>
        <MiddleText />
        <FullBanner />
      </Layout>
    </>
  );
}
