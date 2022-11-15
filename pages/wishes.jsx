import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function Wishes() {
  return (
    <>
      <Head>
        <title>Home 24 | Izbranniy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container">
          <p className="page_main_title">Избранное</p>
        </div>
      </Layout>
    </>
  );
}
