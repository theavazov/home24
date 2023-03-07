import Head from "next/head";
import { Layout } from "../../components/layout/layout";
import { Location } from "../../components/utils/location/location";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Home 24 | Bloglar</title>
      </Head>
      <Layout>
        <section>
          <div className="container">
            <Location location={"Блог"} />
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
