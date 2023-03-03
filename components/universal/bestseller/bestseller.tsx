import { useEffect, useState } from "react";
import { getPopularProducts } from "../../../server/products";
import { ProductsLoader } from "../../utils/loaders/loaders";
import { SectionInfo } from "../../utils/sectioninfo/sectioninfo";
import styles from "./bestseller.module.css";

export function BestsellersSection() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    setIsLoading(true);
    getPopularProducts()
      .then((res) => {
        if (res.data > 0) {
          setProducts(res.data);
          setIsLoading(false);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <section className="section">
      <div className="container section_inner">
        <SectionInfo
          title={"Хиты продаж"}
          more={{ text: "Все товары", path: "/bestseller" }}
        />
        {isLoading ? (
          <ProductsLoader />
        ) : (
          <div className="products_container"></div>
        )}
      </div>
    </section>
  );
}
