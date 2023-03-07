import Head from "next/head";
import { FullBanner } from "../../components/banners/fullbanner/fullbanner";
import { Layout } from "../../components/layout/layout";
import { Location } from "../../components/utils/location/location";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Home 24 | Checkout</title>
      </Head>
      <Layout>
        <section>
          <div className="container">
            <Location
              location={"Оформление заказа"}
              category={{ title: "Корзина", path: "/cart" }}
            />
          </div>
        </section>
        <FullBanner />
      </Layout>
    </>
  );
}
