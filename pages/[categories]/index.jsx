import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/categories/${router.query.id}`)
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
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
        {products.map((product) => {
          return <p key={product.id}>{product.name}</p>;
        })}
      </div>
    </div>
  );
}
