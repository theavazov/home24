import Head from "next/head";
import FullBanner from "../../../../components/fullBanner/FullBanner";
import Layout from "../../../../components/layout/Layout";
import MiddleText from "../../../../components/middleText/MiddleText";

export default function SingleProductPage() {
  return (
    <>
      <Head>
        <title>Single Product</title>
      </Head>
      <Layout>
        <MiddleText />
        <FullBanner />
      </Layout>
    </>
  );
}
