import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { backArrow, search } from "../components/icons/icons";
import Layout from "../components/layout/Layout";
import styles from "../styles/Search.module.css";

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
