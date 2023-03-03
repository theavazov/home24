import { MiniFullBanner } from "../../components/banners/minifull/minifull";
import { CustomHead } from "../../components/layout/head";
import { Layout } from "../../components/layout/layout";
import styles from "../../styles/brands.module.css";
import { endpoint } from "../_app";

export default function BrandInnerPage() {
  return (
    <>
      <CustomHead
        title={"Apple"}
        desc={"Apple brandi"}
        canonical={`${endpoint}/brands/slug`}
      />
      <Layout>
        <MiniFullBanner />
      </Layout>
    </>
  );
}
