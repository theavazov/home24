import Head from "next/head";
import FullBanner from "../../components/fullBanner/FullBanner";
import { Layout } from "../../components/layout/layout";
import MiddleText from "../../components/middleText/MiddleText";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Home 24 | Checkout</title>
      </Head>
      <Layout>
        <p>Checkout</p>
        <MiddleText />
        <FullBanner />
      </Layout>
    </>
  );
}
