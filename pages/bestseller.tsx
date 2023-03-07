import { CustomHead } from "../components/layout/head";
import { Layout } from "../components/layout/layout";
import { Aside } from "../components/utils/aside/aside";
import { Location } from "../components/utils/location/location";
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
        <section>
          <div className="container layout">
            <Aside />
            <div className="main_content">
              <Location location={"Хит товары"} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
