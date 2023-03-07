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
import { Aside } from "../../components/utils/aside/aside";
import { CategoriesLoader } from "../../components/utils/loaders/loaders";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query; // category

  const { categories, isLoading } = useContext(CategoriesContext);

  return (
    <>
      <CustomHead
        title={`Home24 | category ${category}`}
        desc={"desc"}
        canonical={endpoint}
      />
      <Layout>
        <section>
          <div className="container layout">
            <Aside />
            <div className="main_content">
              <Location location={"Мебель"} />
              {isLoading ? (
                <CategoriesLoader customClass={"inner_container"} />
              ) : (
                <div className="inner_container">
                  {categories.map((category: any, i: number) => {
                    return <CategoryCard key={i} category={category} />;
                  })}
                </div>
              )}
            </div>
          </div>
        </section>
        <BestsellersSection />
        <MiniFullBanner />
      </Layout>
    </>
  );
}
