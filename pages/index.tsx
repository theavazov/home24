import Image from "next/image";
import Link from "next/link";
import Herobanner from "../components/Home/HeroBanner/HeroBanner";
import { Layout } from "../components/layout/layout";
import styles from "../styles/home.module.css";
import blogImage from "../media/blog-image.jpeg";
import brand from "../media/brand.png";
import Product from "../components/Product/Product";
import { CategoryCard } from "../components/cards/category/category";
import { useContext, useEffect, useState } from "react";
import { CustomHead } from "../components/layout/head";
import { endpoint } from "./_app";
import { CategoriesContext } from "../contexts/categories";
import { getBrands } from "../server/brands";
import { BrandCard } from "../components/cards/brand/brand";
import { SectionInfo } from "../components/utils/sectioninfo/sectioninfo";
import { FullBanner } from "../components/banners/fullbanner/fullbanner";
import {
  BrandsLoader,
  CategoriesLoader,
} from "../components/utils/loaders/loaders";
import { BestsellersSection } from "../components/universal/bestseller/bestseller";
import { PopularProductsSection } from "../components/universal/popular/popular";

export default function Home() {
  const { categories, isLoading } = useContext(CategoriesContext);
  const [brands, setBrands] = useState<any>([]);
  const [isBrandsLoading, setIsBrandsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsBrandsLoading(true);
    getBrands()
      .then((res) => {
        setBrands(res.data);
        setIsBrandsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <CustomHead title={"Home 24"} desc={"desc"} canonical={endpoint} />
      <Layout>
        <Herobanner />
        <section className="section">
          <div className="container">
            <SectionInfo title={"Kатегории"} />
            {isLoading ? (
              <CategoriesLoader />
            ) : (
              <div className="grid6">
                {categories.length > 0
                  ? categories.map((category: any, i: number) => {
                      return <CategoryCard key={i} category={category} />;
                    })
                  : null}
              </div>
            )}
          </div>
        </section>
        <BestsellersSection />
        <PopularProductsSection />
        <section className="section">
          <div className="container">
            <SectionInfo
              title={"Популярные бренды"}
              more={{ text: "Смотреть все", path: "/brands" }}
            />
            {isBrandsLoading ? (
              <BrandsLoader />
            ) : (
              <div className="grid6_brands">
                {brands.length > 0
                  ? brands.map((brand: any, i: number) => {
                      return <BrandCard key={i} brand={brand} />;
                    })
                  : null}
              </div>
            )}
          </div>
        </section>
        <FullBanner />
        <section className="section">
          <div className={`container ${styles.blog_inner}`}>
            <SectionInfo
              title={"Блог"}
              more={{ text: "Все блоги", path: "/blog" }}
            />
            <div className="blog_container"></div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const Blog = ({ blog }: { blog: any }) => {
  return (
    <Link href={`/blog/1`} className={styles.blog}>
      <p>Поздравляем с ”8 марта” любимых женщин</p>
      <Image src={blogImage} alt={"blog title"} fill />
    </Link>
  );
};
