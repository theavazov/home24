import styles from "../styles/main.module.css";
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
import { AdsCard, AdsLoaderCard } from "../components/cards/ads/ads";
import { PromoBanner } from "../components/banners/promo/promo";
import { getFeedbacks } from "../server/feedbacks";
import { ProductOfTheDayBanner } from "../components/banners/products/products";
import { MainBanner } from "../components/banners/main/main";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <CustomHead title={"Home 24"} desc={"desc"} canonical={endpoint} />
      <Layout>
        <IntroSection />
        <CategoriesSection />
        <BestsellersSection />
        <PromoBanner />
        <PopularProductsSection />
        <AdsSection />
        <BrandsSection />
        <FeedbacksSection />
        <FullBanner />
        <BlogsSection />
      </Layout>
    </>
  );
}

const IntroSection = () => {
  return (
    <section className={styles.intro}>
      <div className={`container ${styles.intro_inner}`}>
        <MainBanner />
        <ProductOfTheDayBanner />
      </div>
    </section>
  );
};

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
        setAds(res.data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <section className="section">
      {isLoading ? (
        <div className={`container ${styles.ads_container}`}>
          <AdsLoaderCard />
          <AdsLoaderCard />
          <AdsLoaderCard />
          <AdsLoaderCard />
        </div>
      ) : (
        <div className="container ads">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={"auto"}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              880: { slidesPerView: 3 },
              1200: { slidesPerView: 4, pagination: false },
            }}
          >
            {ads.length > 0
              ? ads.map((ad: any, i: number) => {
                  return (
                    <SwiperSlide key={i}>
                      <AdsCard content={ad} />
                    </SwiperSlide>
                  );
                })
              : null}
          </Swiper>
        </div>
      )}
    </section>
  );
};

const FeedbacksSection = () => {
  const [feedbacks, setFeedbacks] = useState<object[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getFeedbacks()
      .then((res) => {
        setFeedbacks(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <section className="section">
      <div className="container section_inner">
        <SectionInfo title={"Фото довольных клиентов"} />
      </div>
    </section>
  );
};
