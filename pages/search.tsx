import Head from "next/head";
import { useContext } from "react";
import { FullBanner } from "../components/banners/fullbanner/fullbanner";
import { Layout } from "../components/layout/layout";
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
        <FullBanner />
      </Layout>
    </>
  );
}

{
  /* <section>
          <div className="container">
            <div className={styles.search_top}>
              {backArrow}
              <div className={styles.search_div}>
                <div className={styles.search_icon}>{search}</div>
                <input type="text" placeholder="Искать" />
              </div>
            </div>
          </div>
        </section> */
}
