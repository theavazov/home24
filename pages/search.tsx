import Head from "next/head";
import { useContext } from "react";
import { FullBanner } from "../components/banners/fullbanner/fullbanner";
import { Layout } from "../components/layout/layout";
import { BestsellersSection } from "../components/universal/bestseller/bestseller";
import { Location } from "../components/utils/location/location";
import { SearchContext } from "../contexts/search";
import styles from "../styles/search.module.css";

export default function Search() {
  const { query } = useContext(SearchContext);

  return (
    <>
      <Head>
        <title>Home 24 | Search</title>
      </Head>
      <Layout>
        <section>
          <div className="container">
            <Location
              location={"Результаты поиска"}
              title={`Результаты поиска по запросу ${query}`}
            />
          </div>
        </section>
        <BestsellersSection />
        <FullBanner />
      </Layout>
    </>
  );
}
