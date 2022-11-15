import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function Bag() {
  return (
    <>
      <Head>
        <title>Home 24 | Korzina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container">
          <p className="page_main_title">Корзина</p>
        </div>
      </Layout>
    </>
  );
}
