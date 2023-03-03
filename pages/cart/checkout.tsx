import Head from "next/head";
import { FullBanner } from "../../components/banners/fullbanner/fullbanner";
import { Layout } from "../../components/layout/layout";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Home 24 | Checkout</title>
      </Head>
      <Layout>
        <FullBanner />
      </Layout>
    </>
  );
}
