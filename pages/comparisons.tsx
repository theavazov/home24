import Head from "next/head";
import Link from "next/link";
import { FullBanner } from "../components/banners/fullbanner/fullbanner";
import { Layout } from "../components/layout/layout";
import { BestsellersSection } from "../components/universal/bestseller/bestseller";
import { EmptyComponent } from "../components/universal/empty/empty";
import { Location } from "../components/utils/location/location";

export default function Comparisons() {
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
            <EmptyComponent variant="comparisons" />
          </div>
        </section>
        <BestsellersSection />
        <FullBanner />
      </Layout>
    </>
  );
}
