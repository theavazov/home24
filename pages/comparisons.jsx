import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function Comparisons() {
  return (
    <>
      <Head>
        <title>Home 24 | Sravneniye</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container">
          <p className="page_main_title">Список сравнения</p>
        </div>
      </Layout>
    </>
  );
}
