import Head from "next/head";
import { FullBanner } from "../components/banners/fullbanner/fullbanner";
import { Layout } from "../components/layout/layout";
import { BestsellersSection } from "../components/universal/bestseller/bestseller";
import { EmptyComponent } from "../components/universal/empty/empty";
import { MiddleText } from "../components/universal/text/text";
import { Location } from "../components/utils/location/location";

export default function Wishes() {
  return (
    <>
      <Head>
        <title>Home 24 | Izbranniy</title>
      </Head>
      <Layout>
        <section>
          <div className="container">
            <Location location={"Избранное"} products={"0"} />
            <EmptyComponent variant="wishes" />
          </div>
        </section>
        <BestsellersSection />
        <FullBanner />
      </Layout>
    </>
  );
}
