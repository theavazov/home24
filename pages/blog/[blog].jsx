import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const router = useRouter();
  console.log(router.query);
  const [blog, setBlog] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3000/blog/${router.query.blog}`)
      .then((res) => {
        console.log(res.data);
        setBlog(res.data);
      })
      .catch((err) => console.log(err));
  }, [router]);
  return (
    <div>
      <Head>
        <title>Product</title>
        <meta name="description" content="Home24 - barcha uchun!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <p>Blog</p>
        <p>{blog.title}</p>
      </div>
    </div>
  );
}
