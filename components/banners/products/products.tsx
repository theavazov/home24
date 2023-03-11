import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styles from "./products.module.css";
import { useEffect, useState } from "react";
import { getProductsOfTheDay } from "../../../server/products";
import { bag, heart, star } from "../../../public/icons";
import Image from "next/image";
import { useRouter } from "next/router";

export function ProductOfTheDayBanner() {
  const { locale } = useRouter();
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
  }, [locale]);

  return (
    <div className={styles.swiper}>
      {isLoading ? (
        <div className={`skeleton ${styles.loader}`}></div>
      ) : (
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          spaceBetween={24}
          loop={true}
          speed={800}
        >
          {products.length > 0
            ? products.map((product: any, i: number) => {
                const name =
                  locale === "ru"
                    ? product?.info?.name.ru
                    : locale === "uz"
                    ? product?.info?.name.uz
                    : locale === "en"
                    ? product?.info?.name.en
                    : "";

                return (
                  <SwiperSlide key={i}>
                    <div className={styles.card}>
                      <div className={styles.card_top}>
                        <h4 className={styles.card_header}>товар дня</h4>
                        <button className={styles.card_wishes}>{heart}</button>
                      </div>
                      <div className={styles.card_content}>
                        <div className={styles.card_img}>
                          <Image
                            src={product?.images[0].lg_img}
                            alt={name}
                            width={140}
                            height={245}
                          />
                        </div>
                        <div className={styles.card_info}>
                          <div className={styles.discount_wrapper}>
                            <p className={styles.discount_text}>Cкидка</p>
                            <p className={styles.discount_number}>-90%</p>
                          </div>
                          <div className={styles.card_prices}>
                            <p className={styles.card_price}>1.240.000 сум</p>
                            <p className={styles.card_discount_price}>
                              1.500.000
                            </p>
                          </div>
                          <p className={styles.card_rating}>
                            {star} {product?.info.stars}
                          </p>
                          <p className={styles.card_name}>{name}</p>
                          <button className={styles.add_cart}>
                            {bag} в кoрзину
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.mobilecard}>
                      <div className={styles.card_top}>
                        <h4 className={styles.card_header}>товар дня</h4>
                        <button className={styles.card_wishes}>{heart}</button>
                      </div>
                      <div className={styles.mobilecard_content}>
                        <div className={styles.mobilecard_img}>
                          <div className={styles.discount_wrapper}>
                            <p className={styles.discount_text}>Cкидка</p>
                            <p className={styles.discount_number}>-90%</p>
                          </div>
                          <Image
                            src={product?.images[0].sm_img}
                            alt={name}
                            width={50}
                            height={86}
                          />
                        </div>
                        <div>
                          <p className={styles.card_name}>{name}</p>
                          <div className={styles.card_prices}>
                            <p className={styles.card_price}>1.240.000 сум</p>
                            <p className={styles.card_discount_price}>
                              1.500.000
                            </p>
                          </div>
                          <p className={styles.card_rating}>
                            {star} {product?.info.stars}
                          </p>
                        </div>
                      </div>
                      <button className={styles.add_cart}>
                        {bag} в кoрзину
                      </button>
                    </div>
                  </SwiperSlide>
                );
              })
            : null}
        </Swiper>
      )}
    </div>
  );
}
