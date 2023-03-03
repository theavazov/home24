import Head from "next/head";
import Link from "next/link";
import { FullBanner } from "../../components/banners/fullbanner/fullbanner";
import { arrowRight } from "../../components/icons/icons";
import { Layout } from "../../components/layout/layout";
import { NoneComponent } from "../../components/NoneComponent/NoneComponent";
import Product from "../../components/Product/Product";
import { BestsellersSection } from "../../components/universal/bestseller/bestseller";
import { Location } from "../../components/utils/location/location";
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
            <Location location={"Корзина"} products={"0"} />
            <NoneComponent info={info} />
          </div>
        </section>
        <BestsellersSection />
        <FullBanner />
      </Layout>
    </>
  );
}
