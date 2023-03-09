import { useEffect, useState } from "react";
import { getBestsellerProducts } from "../../../server/products";
import ProductCard from "../../cards/product/product";
import { ProductsLoader } from "../../utils/loaders/loaders";
import { SectionInfo } from "../../utils/sectioninfo/sectioninfo";
import styles from "./bestseller.module.css";

export function BestsellersSection() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    setIsLoading(true);
    getBestsellerProducts("12")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
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
          <div className="products_container">
            {products.length > 0
              ? products.map((product: any, i: number) => {
                  return <ProductCard key={i} product={product} />;
                })
              : null}
          </div>
        )}
      </div>
    </section>
  );
}
