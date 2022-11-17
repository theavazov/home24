import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Blog } from "..";
import Layout from "../../components/layout/Layout";
import MiddleText from "../../components/middleText/MiddleText";

export default function DynamicBlogPage() {
  // const router = useRouter();
  // console.log(router.query);
  // const [blog, setBlog] = useState({});
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3000/blog/${router.query.blog}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setBlog(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [router]);
  return (
    <div>
      <Head>
        <title>Nechinchidir Blog</title>
      </Head>
      <Layout>
        <section className="section">
          <div className="container">
            <div className="titles_div">
              <p className="page_main_title">Другие блоги</p>
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
    </div>
  );
}
