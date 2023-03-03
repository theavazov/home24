import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { arrowRight } from "../../components/icons/icons";
import { CustomHead } from "../../components/layout/head";
import { Layout } from "../../components/layout/layout";
import { CategoriesContext } from "../../contexts/categories";
import { CategoryCard } from "../../components/cards/category/category";
import { endpoint } from "../_app";
import { FullBanner } from "../../components/banners/fullbanner/fullbanner";

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query; // category

  const { categories, isLoading } = useContext(CategoriesContext);

  return (
    <>
      <CustomHead
        title={`Home24 | category ${slug}`}
        desc={"desc"}
        canonical={endpoint}
      />
      <Layout>
        <section>
          <div className="container main_flex_content">
            <div id="mainContent" style={{ flex: "1 1 auto" }}>
              <div className="main_text_content">
                <div className="page_node">
                  <Link href="/" className="page_node_element active">
                    Главная
                  </Link>
                  {arrowRight}
                  <p className="page_node_element">Мебель</p>
                </div>
                <p className="page_main_title">Мебель</p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "24px",
                  marginTop: "32px",
                }}
              >
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  categories.map((category: any, i: number) => {
                    return (
                      <CategoryCard key={i} category={category} parent={slug} />
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="titles_div">
              <p className="category_title">Хиты продаж</p>
              <Link href="#" className="category_view_all">
                Все товары
              </Link>
            </div>
            <div className="products_grid"></div>
          </div>
        </section>
        <FullBanner />
      </Layout>
    </>
  );
}
