import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AsideNav from "../../../components/AsideNav/AsideNav";
import FullBanner from "../../../components/fullBanner/FullBanner";
import { arrowRight, grid4, grid9 } from "../../../components/icons/icons";
import Layout from "../../../components/layout/Layout";
import MiddleText from "../../../components/middleText/MiddleText";
import Product from "../../../components/Product/Product";
import styles from "./Subcategories.module.css";

export default function SubcategoryPage() {
  const router = useRouter();
  const { subcategory } = router.query;
  const [isGrid, setIsGrid] = useState(false);

  useEffect(() => {
    console.log(subcategory);
  }, [router]);
  return (
    <>
      <Head>
        <title>Home24 | Mebel | Gamer kreslo</title>
      </Head>
      <Layout>
        <section>
          <div className="container main_flex_content">
            <AsideNav />
            <div id="mainContent" style={{ flex: "1 1 auto" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <div className="main_text_content">
                  <div className="page_node">
                    <Link href="/" className="page_node_element active">
                      Главная
                    </Link>
                    {arrowRight}
                    <Link href="/dynamic" className="page_node_element active">
                      Мебель
                    </Link>
                    {arrowRight}
                    <p className="page_node_element">Геймерские кресла</p>
                  </div>
                  <p className="page_main_title">Геймерские кресла </p>
                </div>
                <div className={styles.grid_btn_div}>
                  <button
                    onClick={() => setIsGrid(!isGrid)}
                    className={isGrid ? "" : styles.active}
                    style={{
                      background: "none",
                      border: "none",
                      display: "grid",
                      placeItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    {grid9}
                  </button>
                  <button
                    onClick={() => setIsGrid(!isGrid)}
                    className={isGrid ? styles.active : ""}
                    style={{
                      background: "none",
                      border: "none",
                      display: "grid",
                      placeItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    {grid4}
                  </button>
                </div>
              </div>
              <section className={isGrid ? "grid3" : "products_grid_5"}>
                <Product isGrid={isGrid} />
                <Product isGrid={isGrid} />
                <Product isGrid={isGrid} />
                <Product isGrid={isGrid} />
                <Product isGrid={isGrid} />
                <Product isGrid={isGrid} />
                <Product isGrid={isGrid} />
              </section>
              <MiddleText />
            </div>
          </div>
        </section>
        <FullBanner />
      </Layout>
    </>
  );
}
