import { useRouter } from "next/router";
import { useEffect } from "react";
import { MiniFullBanner } from "../../components/banners/minifull/minifull";
import { CustomHead } from "../../components/layout/head";
import { Layout } from "../../components/layout/layout";
import { BestsellersSection } from "../../components/universal/bestseller/bestseller";
import { getSingleProduct } from "../../server/products";
import { endpoint } from "../_app";
import styles from "../../styles/product.module.css";
import { Location } from "../../components/utils/location/location";
import { ProductTab } from "../../components/product/tab/tab";
import { Options } from "../../components/product/options";
import ProductSwiper from "../../components/product/content/content";

export default function SingleProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (router.isReady) {
      getSingleProduct(slug)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    }
  }, [router]);

  return (
    <>
      <CustomHead
        title={"Product"}
        desc={"desc"}
        canonical={`${endpoint}/product/${slug}`}
      />
      <Layout>
        <section>
          <div className="container">
            <Location
              location={"Product"}
              category={{ title: "Мебель", path: "/dynamic" }}
              subcategory={{
                title: " Геймерские кресла",
                path: "/dynamic/gamer",
              }}
            />
            <div className={styles.product_main_div}>
              <div className={styles.product_info_container}>
                <ProductSwiper />
                <Options />
              </div>
              <ProductTab />
            </div>
          </div>
        </section>
        <BestsellersSection />
        <MiniFullBanner />
      </Layout>
    </>
  );
}
