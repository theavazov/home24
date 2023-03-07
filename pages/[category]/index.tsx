import { useRouter } from "next/router";
import { useContext } from "react";
import { CustomHead } from "../../components/layout/head";
import { Layout } from "../../components/layout/layout";
import { CategoriesContext } from "../../contexts/categories";
import { CategoryCard } from "../../components/cards/category/category";
import { endpoint } from "../_app";
import { Location } from "../../components/utils/location/location";
import { BestsellersSection } from "../../components/universal/bestseller/bestseller";
import { MiniFullBanner } from "../../components/banners/minifull/minifull";

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
              <Location location={"Мебель"} />
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
        <BestsellersSection />
        <MiniFullBanner />
      </Layout>
    </>
  );
}
