import { CustomHead } from "../components/layout/head";
import { Layout } from "../components/layout/layout";
import { endpoint } from "./_app";

export default function PopularProductsPage() {
  return (
    <>
      <CustomHead
        title={"Home24 | Популярные товары"}
        desc={"Популярные товары Home24"}
        canonical={`${endpoint}/popular`}
      />
      <Layout>
        <p>Bestseller</p>
      </Layout>
    </>
  );
}
