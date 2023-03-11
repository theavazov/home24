import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CustomHead } from "../../components/layout/head";
import { Layout } from "../../components/layout/layout";
import { CategoryCard } from "../../components/cards/category/category";
import { endpoint } from "../_app";
import { Location } from "../../components/utils/location/location";
import { BestsellersSection } from "../../components/universal/bestseller/bestseller";
import { MiniFullBanner } from "../../components/banners/minifull/minifull";
import { Aside } from "../../components/utils/aside/aside";
import { MiddleText } from "../../components/universal/text/text";
import { CategoriesLoader } from "../../components/utils/loaders/loaders";
import { getCategoryBySlug } from "../../server/categories";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [subcategories, setSubcategories] = useState<object[]>([]);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (router.isReady) {
      getCategoryBySlug(category)
        .then((res) => {
          if (router.locale === "ru") {
            setName(res.category.name.ru);
          } else if (router.locale === "uz") {
            setName(res.category.name.uz);
          } else if (router.locale === "en") {
            setName(res.category.name.en);
          }
          setSubcategories(res.category.children);
          setIsLoading(false);
        })
        .catch((e) => console.log(e));
    }
  }, [category, router.locale]);

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
              <Location location={name} />
              {isLoading ? (
                <CategoriesLoader customClass={"inner_container"} />
              ) : (
                <div className="inner_container">
                  {subcategories.map((subcategory: any, i: number) => {
                    return <CategoryCard key={i} category={subcategory} />;
                  })}
                </div>
              )}
            </div>
          </div>
        </section>
        <BestsellersSection />
        <MiddleText />
        <MiniFullBanner />
      </Layout>
    </>
  );
}
