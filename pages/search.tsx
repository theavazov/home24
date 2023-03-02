import Head from "next/head";
import { backArrow, search } from "../components/icons/icons";
import { Layout } from "../components/layout/layout";
import styles from "../styles/search.module.css";

export default function Search() {
  return (
    <>
      <Head>
        <title>Home 24 | Search</title>
      </Head>
      <Layout>
        <section>
          <div className="container">
            <div className={styles.search_top}>
              {backArrow}
              <div className={styles.search_div}>
                <div className={styles.search_icon}>{search}</div>
                <input type="text" placeholder="Искать" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
