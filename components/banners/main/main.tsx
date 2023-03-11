import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { getMainBanner } from "../../../server/banner";
import styles from "./main.module.css";
import { backArrow } from "../../../public/icons";
import Image from "next/image";

export function MainBanner() {
  const { locale } = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [banners, setBanners] = useState<object[]>([]);

  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getMainBanner()
      .then((res) => {
        setBanners(res.data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, [locale]);

  return (
    <div className={styles.mainbanner}>
      {isLoading ? (
        <div className={`skeleton ${styles.loader}`}></div>
      ) : banners && banners.length > 0 ? (
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 2000 }}
          loop={true}
          speed={1600}
          spaceBetween={24}
          navigation={{
            prevEl: prevBtn.current,
            nextEl: nextBtn.current,
          }}
          pagination={{ clickable: true }}
        >
          {banners.map((slide: any, i: number) => {
            const banner =
              locale === "ru"
                ? slide.md_img.ru
                : locale === "uz"
                ? slide.md_img.uz
                : locale === "en"
                ? slide.md_img.en
                : "";

            return (
              <SwiperSlide key={i}>
                <div className={styles.slide}>
                  <Image
                    src={banner}
                    alt="main banner"
                    className="image"
                    width={1200}
                    height={430}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : null}
      <button
        ref={prevBtn}
        aria-label="prev"
        className={`${styles.btn} ${styles.prev}`}
      >
        {backArrow}
      </button>
      <button
        ref={nextBtn}
        aria-label="next"
        className={`${styles.btn} ${styles.next}`}
      >
        {backArrow}
      </button>
    </div>
  );
}
