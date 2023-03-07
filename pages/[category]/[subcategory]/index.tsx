import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { arrowRight, grid4, grid9 } from "../../../public/icons";
import { Layout } from "../../../components/layout/layout";
import { Location } from "../../../components/utils/location/location";
import { MiniFullBanner } from "../../../components/banners/minifull/minifull";

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
          <div className="container main_flex_content">
            <div id="mainContent" style={{ flex: "1 1 auto" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Location location={"Геймерские кресла"} />
              </div>
            </div>
          </div>
        </section>
        <MiniFullBanner />
      </Layout>
    </>
  );
}
