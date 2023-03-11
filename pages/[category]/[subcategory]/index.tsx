import Head from "next/head";
import { useRouter } from "next/router";
import { arrowRight, grid4, grid9 } from "../../../public/icons";
import { Layout } from "../../../components/layout/layout";
import { Location } from "../../../components/utils/location/location";
import { MiniFullBanner } from "../../../components/banners/minifull/minifull";
import { Aside } from "../../../components/utils/aside/aside";
import { MiddleText } from "../../../components/universal/text/text";

export default function SubcategoryPage() {
  const router = useRouter();
  const { subcategory } = router.query;

  return (
    <>
      <Head>
        <title>Home24 | Mebel | Gamer kreslo</title>
      </Head>
      <Layout>
        <section>
          <div className="container layout">
            <Aside />
            <div className="main_content">
              <Location location={"Gamer kreslo"} />
              {/* {isLoading ? (
                <CategoriesLoader customClass={"inner_container"} />
              ) : (
                <div className="inner_container">
                  {subcategories.map((subcategory: any, i: number) => {
                    return <CategoryCard key={i} category={subcategory} />;
                  })}
                </div>
              )} */}
            </div>
          </div>
        </section>
        <MiddleText />
        <MiniFullBanner />
      </Layout>
    </>
  );
}
