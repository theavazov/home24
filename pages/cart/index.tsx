import Head from "next/head";
import { FullBanner } from "../../components/banners/fullbanner/fullbanner";
import { Layout } from "../../components/layout/layout";
import { BestsellersSection } from "../../components/universal/bestseller/bestseller";
import { EmptyComponent } from "../../components/universal/empty/empty";
import { Location } from "../../components/utils/location/location";

export default function Cart() {
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
            <EmptyComponent variant="cart" />
          </div>
        </section>
        <BestsellersSection />
        <FullBanner />
      </Layout>
    </>
  );
}
