import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AsideNav from "../../components/AsideNav/AsideNav";
import { Category } from "../../components/Category/Category";
import FullBanner from "../../components/fullBanner/FullBanner";
import { arrowRight } from "../../components/icons/icons";
import Layout from "../../components/layout/Layout";
import MiddleText from "../../components/middleText/MiddleText";
import { Product } from "../../components/Product/Product";
import mebel from "../../media/mebel-category-image.png";
import styles from "./Test.module.css";

export default function CategoryPage() {
  // const router = useRouter();
  // console.log(router.query.id);
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3000/categories/${router.query.id}`)
  //     .then((res) => {
  //       console.log(res.data.products);
  //       setProducts(res.data.products);
  //     })
  //     .catch((err) => console.log(err));
  // }, [router]);
  return (
    <>
      <Head>
        <title>Category - Mebel</title>
      </Head>
      <Layout>
        <section>
          <div className="container main_flex_content">
            <AsideNav />
            <div id="mainContent" style={{ flex: "1 1 auto" }}>
              <div className="main_text_content">
                <div className="page_node">
                  <Link href="/" className="page_node_element active">
                    Главная
                  </Link>
                  {arrowRight}
                  <p className="page_node_element">Мебель</p>
                </div>
                <p className="page_main_title">Мебель</p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "24px",
                  marginTop: "32px",
                }}
              >
                <Link href="/dynamic/gamer" className={styles.category}>
                  <div className={styles.category_img}>
                    <Image src={mebel} alt="category mebel" />
                  </div>
                  <div className={styles.category_content}>
                    <p className={styles.category_name}>Мебель</p>
                  </div>
                </Link>
                <Link href="/dynamic/gamer" className={styles.category}>
                  <div className={styles.category_img}>
                    <Image src={mebel} alt="category mebel" />
                  </div>
                  <div className={styles.category_content}>
                    <p className={styles.category_name}>Мебель</p>
                  </div>
                </Link>
                <Link href="/dynamic/gamer" className={styles.category}>
                  <div className={styles.category_img}>
                    <Image src={mebel} alt="category mebel" />
                  </div>
                  <div className={styles.category_content}>
                    <p className={styles.category_name}>Мебель</p>
                  </div>
                </Link>
                <Link href="/dynamic/gamer" className={styles.category}>
                  <div className={styles.category_img}>
                    <Image src={mebel} alt="category mebel" />
                  </div>
                  <div className={styles.category_content}>
                    <p className={styles.category_name}>Мебель</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="titles_div">
              <p className="category_title">Хиты продаж</p>
              <Link href="#" className="category_view_all">
                Все товары
              </Link>
            </div>
            <div className="products_grid">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </section>
        <MiddleText />
        <FullBanner />
      </Layout>
    </>
  );
}
