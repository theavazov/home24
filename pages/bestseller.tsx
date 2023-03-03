import { CustomHead } from "../components/layout/head";
import { Layout } from "../components/layout/layout";
import { endpoint } from "./_app";

export default function BestsellersPage() {
  return (
    <>
      <CustomHead
        title={"Home24 | Хит товары"}
        desc={"Хит товары Home24"}
        canonical={`${endpoint}/bestseller`}
      />
      <Layout>
        <p>Bestseller</p>
      </Layout>
    </>
  );
}
