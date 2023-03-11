import { MainBanner } from "../components/banners/main/main";
import { PromoBanner } from "../components/banners/promo/promo";
import { CustomHead } from "../components/layout/head";
import { Layout } from "../components/layout/layout";
import { Aside } from "../components/utils/aside/aside";
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
          <div className="container layout">
            <Aside />
            <div className="main_content">
              <Location location={"Акции"} />
              <PromoBanner customClass={"discount"} />
              <MainBanner />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
