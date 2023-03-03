import Head from "next/head";
import styles from "../../styles/brands.module.css";
import { useEffect, useState } from "react";
import { MiniFullBanner } from "../../components/banners/minifull/minifull";
import { BrandCard } from "../../components/cards/brand/brand";
import { Layout } from "../../components/layout/layout";
import { Location } from "../../components/utils/location/location";
import { getBrands } from "../../server/brands";
import { BrandsLoader } from "../../components/utils/loaders/loaders";

export default function Brands() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [brands, setBrands] = useState<any>([]);

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
    <>
      <Head>
        <title>Home 24 | Brands</title>
      </Head>
      <Layout>
        <section>
          <div className="container">
            <Location location={"Популярные бренды"} />
          </div>
        </section>
        <section>
          {isLoading ? (
            <BrandsLoader />
          ) : (
            <div className="container grid6_brands">
              {brands.length > 0
                ? brands.map((brand: any, i: number) => {
                    return <BrandCard key={i} brand={brand} />;
                  })
                : null}
            </div>
          )}
        </section>
        <MiniFullBanner />
      </Layout>
    </>
  );
}
