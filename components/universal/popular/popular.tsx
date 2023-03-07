import { useEffect, useState } from "react";
import { getPopularProducts } from "../../../server/products";
import ProductCard from "../../cards/product/product";
import { ProductsLoader } from "../../utils/loaders/loaders";
import { SectionInfo } from "../../utils/sectioninfo/sectioninfo";
import styles from "./popular.module.css";

export function PopularProductsSection() {
  const [products, setProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getPopularProducts()
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
          title={"Популярные товары"}
          more={{ text: "Все товары", path: "/popular" }}
        />
        {isLoading ? (
          <ProductsLoader />
        ) : (
          <div className="products_container">
            {products.length > 0
              ? products.map((product: any, i: any) => {
                  return <ProductCard key={i} product={product} />;
                })
              : null}
          </div>
        )}
      </div>
    </section>
  );
}
