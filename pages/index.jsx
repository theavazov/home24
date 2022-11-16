import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Herobanner from "../components/Home/HeroBanner/HeroBanner";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home 24 | Bosh sahifa</title>
        <meta name="description" content="Home24 - barcha uchun!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Herobanner />
        <section className="section">
          <div className={`container`}>
            <div className="titles_div">
              <p className="category_title">Популярные категории</p>
              <Link href="#" className="category_view_all">
                Все товары
              </Link>
            </div>
            <div className={styles.categories_container}>
              <div className={styles.category}></div>
              <div className={styles.category}></div>
              <div className={styles.category}></div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className={`container ${styles.blog_inner}`}>
            <div className="titles_div">
              <p className="category_title">Блог</p>
              <Link href="#" className="category_view_all">
                Все блоги
              </Link>
            </div>
            <div className={styles.blog_container}></div>
          </div>
        </section>
      </Layout>
    </>
  );
}

const Category = ({ category }) => {
  return (
    <Link
      href={`/${category.category_name}?id=${category.id}`}
      // href={{
      //   pathname: `/${category.category_name}`,
      //   query: { id: category.id },
      // }}
      className={styles.category}
    >
      <p>{category.category_name}</p>
    </Link>
  );
};

const Blog = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.id}`} className={styles.blog} key={blog.id}>
      <p>{blog.title}</p>
      <Image src={blog.imageURL} alt={blog.title} fill />
    </Link>
  );
};
