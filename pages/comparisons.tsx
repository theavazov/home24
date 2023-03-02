import Head from "next/head";
import Link from "next/link";
import FullBanner from "../components/fullBanner/FullBanner";
import { arrowRight } from "../components/icons/icons";
import { Layout } from "../components/layout/layout";
import MiddleText from "../components/middleText/MiddleText";
import { NoneComponent } from "../components/NoneComponent/NoneComponent";
import Product from "../components/Product/Product";
import image from "../media/comparisons-img.png";

export default function Comparisons() {
  const info = {
    title: "Сравнивать пока нечего",
    desc: "Добавляйте товары к сравнению характеристики выбирайте самый подходящий вам товар",
    image: image,
  };
  return (
    <>
      <Head>
        <title>Home 24 | Sravneniye</title>
        <link rel="icon" href="/favicon.ico" />
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
                <p className="page_node_element">Сравнение</p>
              </div>
              <p className="page_main_title">Список сравнения</p>
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
            <div className="products_grid"></div>
          </div>
        </section>
        <MiddleText />
        <FullBanner />
      </Layout>
    </>
  );
}
