import Head from "next/head";
import Link from "next/link";
import { FullBanner } from "../components/banners/fullbanner/fullbanner";
import { Layout } from "../components/layout/layout";
import { NoneComponent } from "../components/NoneComponent/NoneComponent";
import Product from "../components/Product/Product";
import { Location } from "../components/utils/location/location";
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
            <Location
              location={"Сравнение"}
              title={"Список сравнения"}
              products={"0"}
            />
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
        <FullBanner />
      </Layout>
    </>
  );
}
