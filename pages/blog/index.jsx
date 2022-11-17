import Head from "next/head";
import { Blog } from "..";
import Layout from "../../components/layout/Layout";
import MiddleText from "../../components/middleText/MiddleText";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Home 24 | Bloglar</title>
      </Head>
      <Layout>
        <section>
          <div className="container">
            <div className="titles_div">
              <p className="page_main_title">Блог</p>
            </div>
            <div className="blog_container">
              <Blog />
              <Blog />
              <Blog />
              <Blog />
            </div>
          </div>
        </section>
        <MiddleText />
      </Layout>
    </>
  );
}
