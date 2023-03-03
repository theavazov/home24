import { FullBanner } from "../components/banners/fullbanner/fullbanner";
import { CustomHead } from "../components/layout/head";
import { Layout } from "../components/layout/layout";
import { Location } from "../components/utils/location/location";
import { endpoint } from "./_app";

export default function About() {
  return (
    <>
      <CustomHead
        title={"Home24 | О нас"}
        desc={"О Home24"}
        canonical={`${endpoint}/about`}
      />
      <Layout>
        <section>
          <div className="container">
            <Location location={"О нас"} />
          </div>
        </section>
        <FullBanner />
      </Layout>
    </>
  );
}
