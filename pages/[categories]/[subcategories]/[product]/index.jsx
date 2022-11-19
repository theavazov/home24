import Head from "next/head";
import Link from "next/link";
import FullBanner from "../../../../components/fullBanner/FullBanner";
import {
  arrowRight,
  cart,
  hand,
  heart,
  swap,
} from "../../../../components/icons/icons";
import dostavka from "../../../../media/dostavka.png";
import assistent from "../../../../media/expert.png";
import Layout from "../../../../components/layout/Layout";
import MiddleText from "../../../../components/middleText/MiddleText";
import Product from "../../../../components/Product/Product";
import ProductTab from "../../../../components/ProductInner/ProductTab/ProductTab";
import styles from "./SingleProduct.module.css";
import Image from "next/image";
import ProductSwiper from "../../../../components/ProductInner/ProductSwiper/ProductSwiper";

export default function SingleProductPage() {
  return (
    <>
      <Head>
        <title>Single Product</title>
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
                <Link href="/dynamic" className="page_node_element active">
                  Мебель
                </Link>
                {arrowRight}
                <Link
                  href="/dynamic/gamer"
                  className="page_node_element active"
                >
                  Геймерские кресла
                </Link>
                {arrowRight}
                <p className="page_node_element">Геймерское кресло Audi</p>
              </div>
            </div>
            <section className={styles.product_main_div}>
              <div className={styles.product_info_container}>
                <ProductSwiper />
                <Options />
              </div>
              <ProductTab />
            </section>
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

const Options = () => {
  return (
    <div className={styles.product_buy_container}>
      <div className={styles.sticky_options}>
        <div className={styles.option_div}>
          <div className={styles.option_div_container}>
            <div className={styles.prices_div}>
              <p className={styles.current_price}>25 880 000 СУМ</p>
              <p className={styles.old_price}>2 880 000 СУМ</p>
            </div>
            <div className={styles.svg_div}>
              <button className={styles.active}>{swap}</button>
              <button>{heart}</button>
            </div>
          </div>
          <div className={styles.option_div_btns}>
            <button type="button" className="primary_btn">
              {cart} <span>Добавить в корзину</span>
            </button>
            <button type="button" className="secondary_btn">
              {hand} <span>Купить в один клик</span>
            </button>
          </div>
        </div>
        <div className={styles.other_options_div}>
          <div className={styles.other_option}>
            <p className={styles.other_option_title}>Доставка</p>
            <p className={styles.other_option_desc}>
              Доставка к курьером на дом
            </p>
            <Image src={dostavka} alt="dostavka" />
          </div>
          <div className={styles.other_option}>
            <p className={styles.other_option_title}>
              Обратитесь к специалисту!
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "30px",
              }}
            >
              <p className={styles.other_option_desc}>
                Служба поддержки: <br />
                (998-71) 200-7-002
              </p>
              <p className={styles.estvoprosi}>ЕСТЬ ВОПРОСЫ?</p>
            </div>
            <Image src={assistent} alt="dostavka" />
          </div>
        </div>
      </div>
    </div>
  );
};
