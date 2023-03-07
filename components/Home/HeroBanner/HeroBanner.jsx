import styles from "./HeroBanner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ProductOfTheDayBanner } from "../../banners/products/products";

export default function Herobanner() {
  return (
    <section className={styles.herobanner_section}>
      <div className={`${styles.herobanner_inner} container`}>
        <MainBanner />
        <ProductOfTheDayBanner />
        {/* <ProductOfTheDay /> */}
      </div>
    </section>
  );
}

const MainBanner = () => {
  return (
    <div className={styles.mainBanner_swiper}>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        speed={1600}
        spaceBetween={12}
        loop={true}
      >
        <SwiperSlide className={styles.mainBanner_swiperSlide}>1</SwiperSlide>
        <SwiperSlide className={styles.mainBanner_swiperSlide}>2</SwiperSlide>
      </Swiper>
    </div>
  );
};

const ProductOfTheDay = () => {
  return (
    <div className={styles.productOfTheDay_swiper}>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={12}
        loop={true}
      >
        <SwiperSlide className={styles.productOfTheDay_swiperSlide}>
          1
        </SwiperSlide>
        <SwiperSlide className={styles.productOfTheDay_swiperSlide}>
          2
        </SwiperSlide>
        <SwiperSlide className={styles.productOfTheDay_swiperSlide}>
          3
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
