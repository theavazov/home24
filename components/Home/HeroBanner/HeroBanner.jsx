import styles from "./HeroBanner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";

export default function Herobanner() {
  return (
    <section className={styles.herobanner_section}>
      <div className={`${styles.herobanner_inner} container`}>
        <MainBanner />
        <ProductOfTheDay />
      </div>
    </section>
  );
}

const MainBanner = () => {
  const prevRef = useRef();
  const nextRef = useRef();
  return (
    <div className={styles.mainBanner_swiper}>
      <Swiper
        pagination={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;

            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        modules={[Pagination, Navigation]}
        speed={1600}
        spaceBetween={12}
        loop={true}
      >
        <SwiperSlide className={styles.mainBanner_swiperSlide}>1</SwiperSlide>
        <SwiperSlide className={styles.mainBanner_swiperSlide}>2</SwiperSlide>
      </Swiper>
      <div>
        <div ref={prevRef}>Prev</div>
        <div ref={nextRef}>Next</div>
      </div>
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
