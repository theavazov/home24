import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Head>
        <title>Home 24 | Bosh sahifa</title>
        <meta name="description" content="Home24 - barcha uchun!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section>
          <div className="container">
            <p className="page_main_title">Список сравнения</p>
            <p className="category_title">Популярные категории</p>
            <a href="#" className="category_view_all">
              Все товары
            </a>
            <div className={styles.categories_container}>
              {categories.map((category) => {
                return <Category key={category.id} category={category} />;
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

const Category = ({ category }) => {
  return (
    <Link
      href={{
        pathname: `/${category.category_name}`,
        query: { id: category.id },
      }}
      className={styles.category}
    >
      <p>{category.category_name}</p>
    </Link>
  );
};
