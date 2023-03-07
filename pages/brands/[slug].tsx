import { useRouter } from "next/router";
import { MiniFullBanner } from "../../components/banners/minifull/minifull";
import { CustomHead } from "../../components/layout/head";
import { Layout } from "../../components/layout/layout";
import { Aside } from "../../components/utils/aside/aside";
import { Location } from "../../components/utils/location/location";
import styles from "../../styles/brands.module.css";
import { endpoint } from "../_app";

export default function BrandInnerPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <CustomHead
        title={"Apple"}
        desc={"Apple brandi"}
        canonical={`${endpoint}/brands/slug`}
      />
      <Layout>
        <section>
          <div className="container layout">
            <Aside />
            <div className="main_content">
              <Location
                location={"Artel"}
                category={{ title: "Популярные бренды", path: "/brands" }}
                title={"Artel весь ассортимент"}
              />
            </div>
          </div>
        </section>
        <MiniFullBanner />
      </Layout>
    </>
  );
}
