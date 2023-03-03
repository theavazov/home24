import { FullBanner } from "../components/banners/fullbanner/fullbanner";
import { CustomHead } from "../components/layout/head";
import { Layout } from "../components/layout/layout";
import { Location } from "../components/utils/location/location";
import { endpoint } from "./_app";

export default function DiscountsPage() {
  return (
    <>
      <CustomHead
        title={"Home24 | Вопросы и ответы"}
        desc={"Вопросы и ответы в Home24"}
        canonical={`${endpoint}/discounts`}
      />
      <Layout>
        <section>
          <div className="container">
            <Location location={"Вопросы и ответы"} />
          </div>
        </section>
        <FullBanner />
      </Layout>
    </>
  );
}
