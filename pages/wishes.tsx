import Head from "next/head";
import Link from "next/link";
import { FullBanner } from "../components/banners/fullbanner/fullbanner";
import { Layout } from "../components/layout/layout";
import { NoneComponent } from "../components/NoneComponent/NoneComponent";
import Product from "../components/Product/Product";
import { MiddleText } from "../components/universal/text/text";
import { Location } from "../components/utils/location/location";
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
            <Location location={"Избранное"} products={"0"} />
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
