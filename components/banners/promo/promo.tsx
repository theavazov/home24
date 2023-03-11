import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { getPromoBanner } from "../../../server/banner";
import styles from "./promo.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { backArrow } from "../../../public/icons";

type Props = {
  customClass?: string | any;
};

export function PromoBanner({ customClass }: Props) {
  const { locale } = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [banners, setBanners] = useState<object[]>([]);

  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getPromoBanner()
      .then((res) => {
        setBanners(res.data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, [locale]);

  return (
    <section className={customClass ? customClass : "section"}>
      <div className="container">
        <Swiper
          className={styles.container}
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
          {isLoading ? (
            <div className={`skeleton ${styles.loader}`}></div>
          ) : banners && banners.length > 0 ? (
            banners.map((banner: any, i: number) => {
              const slide =
                locale === "ru"
                  ? banner.md_img.ru
                  : locale === "uz"
                  ? banner.md_img.uz
                  : locale === "en"
                  ? banner.md_img.en
                  : "";

              return (
                <SwiperSlide key={i}>
                  <div className={styles.slide}>
                    <Image
                      src={slide}
                      alt="promo"
                      className="image"
                      width={1630}
                      height={370}
                    />
                  </div>
                </SwiperSlide>
              );
            })
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
        </Swiper>
      </div>
    </section>
  );
}
