import Head from "next/head";
import Link from "next/link";
import { Blog } from "..";
import { arrowRight } from "../../components/icons/icons";
import { Layout } from "../../components/layout/layout";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Home 24 | Bloglar</title>
      </Head>
      <Layout>
        <section>
          <div className="container">
            <div className="main_text_content">
              <div className="page_node">
                <Link href="/" className="page_node_element active">
                  Главная
                </Link>
                {arrowRight}
                <p className="page_node_element">Блог</p>
              </div>
              <p className="page_main_title">Блог</p>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="blog_container"></div>
          </div>
        </section>
      </Layout>
    </>
  );
}
