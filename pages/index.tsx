import styles from "../styles/main.module.css";
import Herobanner from "../components/Home/HeroBanner/HeroBanner";
import { Layout } from "../components/layout/layout";
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
  BlogsLoader,
  BrandsLoader,
  CategoriesLoader,
} from "../components/utils/loaders/loaders";
import { BestsellersSection } from "../components/universal/bestseller/bestseller";
import { PopularProductsSection } from "../components/universal/popular/popular";
import { getBlogs } from "../server/blog";
import { BlogCard } from "../components/cards/blog/blog";
import { getAds } from "../server/banner";

export default function Home() {
  return (
    <>
      <CustomHead title={"Home 24"} desc={"desc"} canonical={endpoint} />
      <Layout>
        <Herobanner />
        <CategoriesSection />
        <BestsellersSection />
        <PopularProductsSection />
        <AdsSection />
        <BrandsSection />
        <FullBanner />
        <BlogsSection />
      </Layout>
    </>
  );
}

const CategoriesSection = () => {
  const { categories, isLoading } = useContext(CategoriesContext);

  return (
    <section className="section">
      <div className="container section_inner">
        <SectionInfo title={"Kатегории"} />
        {isLoading ? (
          <CategoriesLoader />
        ) : (
          <div className="categories_container">
            {categories.length > 0
              ? categories.map((category: any, i: number) => {
                  return <CategoryCard key={i} category={category} />;
                })
              : null}
          </div>
        )}
      </div>
    </section>
  );
};

const BlogsSection = () => {
  const [blogs, setBlogs] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getBlogs()
      .then((res) => {
        setBlogs(res.data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <section className="section">
      <div className="container section_inner">
        <SectionInfo
          title={"Блог"}
          more={{ text: "Все блоги", path: "/blog" }}
        />
        {isLoading ? (
          <BlogsLoader />
        ) : (
          <div className="blog_container">
            {blogs.length > 0
              ? blogs.map((blog: any, i: number) => {
                  return <BlogCard key={i} blog={blog} />;
                })
              : null}
          </div>
        )}
      </div>
    </section>
  );
};

const BrandsSection = () => {
  const [brands, setBrands] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getBrands()
      .then((res) => {
        setBrands(res.data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <section className="section">
      <div className="container section_inner">
        <SectionInfo
          title={"Популярные бренды"}
          more={{ text: "Смотреть все", path: "/brands" }}
        />
        {isLoading ? (
          <BrandsLoader />
        ) : (
          <div className="brands_container">
            {brands.length > 0
              ? brands.map((brand: any, i: number) => {
                  return <BrandCard key={i} brand={brand} />;
                })
              : null}
          </div>
        )}
      </div>
    </section>
  );
};

const AdsSection = () => {
  const [ads, setAds] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getAds(4)
      .then((res) => {
        console.log(res.data);
        setAds(res.data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <section className="section">
      <div className={`container ${styles.ads_container}`}></div>
    </section>
  );
};
