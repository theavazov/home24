import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Herobanner from "../components/Home/HeroBanner/HeroBanner";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";
import blogImage from "../media/blog-image.jpeg";
import FullBanner from "../components/fullBanner/FullBanner";
import brand from "../media/brand.png";
import Product from "../components/Product/Product";
import Category from "../components/Category/Category";

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
            <div className="grid6">
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="titles_div">
              <p className="category_title">Популярные бренды</p>
              <Link href="/brands" className="category_view_all">
                Смотреть все
              </Link>
            </div>
            <div className="grid6_brands">
              <Brand />
              <Brand />
              <Brand />
              <Brand />
              <Brand />
              <Brand />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="titles_div">
              <p className="category_title">Телевизоры</p>
              <Link href="/brands" className="category_view_all">
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
        <FullBanner />
        <section className="section">
          <div className={`container ${styles.blog_inner}`}>
            <div className="titles_div">
              <p className="category_title">Блог</p>
              <Link href="/blog" className="category_view_all">
                Все блоги
              </Link>
            </div>
            <div className="blog_container">
              <Blog />
              <Blog />
              <Blog />
              <Blog />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const Blog = ({ blog }) => {
  return (
    <Link href={`/blog/1`} className={styles.blog}>
      <p>Поздравляем с ”8 марта” любимых женщин</p>
      <Image src={blogImage} alt={"blog title"} fill />
    </Link>
  );
};

export const Brand = () => {
  return (
    <div className="brand">
      <div className="brand_img">
        <Image src={brand} alt="Brand" />
      </div>
    </div>
  );
};

// const Blog = ({ blog }) => {
//   return (
//     <Link href={`/blog/${blog.id}`} className={styles.blog} key={blog.id}>
//       <p>{blog.title}</p>
//       <Image src={blog.imageURL} alt={blog.title} fill />
//     </Link>
//   );
// };
