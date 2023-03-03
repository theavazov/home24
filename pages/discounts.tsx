import { CustomHead } from "../components/layout/head";
import { Layout } from "../components/layout/layout";
import { Location } from "../components/utils/location/location";
import { endpoint } from "./_app";

export default function DiscountsPage() {
  return (
    <>
      <CustomHead
        title={"Home24 | Акции"}
        desc={"Акции в Home24"}
        canonical={`${endpoint}/discounts`}
      />
      <Layout>
        <section>
          <div className="container">
            <Location location={"Акции"} />
          </div>
        </section>
      </Layout>
    </>
  );
}
