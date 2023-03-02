import Head from "next/head";
import Link from "next/link";
import FullBanner from "../../components/fullBanner/FullBanner";
import { arrowRight } from "../../components/icons/icons";
import { Layout } from "../../components/layout/layout";
import MiddleText from "../../components/middleText/MiddleText";
import { NoneComponent } from "../../components/NoneComponent/NoneComponent";
import Product from "../../components/Product/Product";
import image from "../../media/cart-img.png";

export default function Cart() {
  const info = {
    title: "В корзине пока нет товаров",
    desc: "Но вы всегда можете ее наполнить",
    image: image,
  };
  return (
    <>
      <Head>
        <title>Home 24 | Korzina</title>
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
                <p className="page_node_element">Корзина</p>
              </div>
              <p className="page_main_title">Корзина</p>
            </div>
            <NoneComponent info={info} />
            {/* <Link href="/cart/checkout">Oformleniye</Link> */}
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
