import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import styles from "./products.module.css";
import { useEffect, useState } from "react";
import { getProductsOfTheDay } from "../../../server/products";

export function ProductOfTheDayBanner() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    setIsLoading(true);
    getProductsOfTheDay()
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className={styles.swiper}>
      {isLoading ? (
        <div className={`skeleton ${styles.card}`}></div>
      ) : (
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          spaceBetween={12}
          loop={true}
          speed={800}
        >
          {products.length > 0
            ? products.map((product: any, i: number) => {
                return (
                  <SwiperSlide key={i}>
                    <div className={styles.swiperSlide}>Swiper {i + 1}</div>
                  </SwiperSlide>
                );
              })
            : null}
        </Swiper>
      )}
    </div>
  );
}
