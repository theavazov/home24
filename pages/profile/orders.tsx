import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../components/layout/layout";
import styles from "../../styles/profile.module.css";
import ordersImage from "../../public/media/active_orders.png";
import Image from "next/image";
import { useState } from "react";
import { Location } from "../../components/utils/location/location";
import { MiniFullBanner } from "../../components/banners/minifull/minifull";
import ProfileNav from "../../components/universal/sidebar/sidebar";

export default function Orders() {
  const [isLogout, setIsLogout] = useState(false);
  return (
    <>
      <Head>
        <title>Home 24 | Zakazlar</title>
      </Head>
      <Layout>
        <section>
          <div className="container">
            <Location
              location={"Мои заказы"}
              title={"Мои заказы"}
              category={{ title: "Личный кабинет", path: "/profile" }}
            />
          </div>
        </section>
        <section>
          <div className="container">
            <div className={styles.main_content}>
              <ProfileNav />
              <div className={styles.profile_grid}>
                <EmptyOrders />
              </div>
            </div>
            <div className={styles.mobile_content_orders}>
              <EmptyOrders />
            </div>
          </div>
        </section>
        <MiniFullBanner />
      </Layout>
    </>
  );
}

const EmptyOrders = () => {
  return (
    <div className={styles.emptyOrders}>
      <div className={styles.emptyOrders_img}>
        <Image src={ordersImage} alt="empty orders" />
      </div>
      <p className={styles.empty_orders_title}>Ещё не успели заказать?</p>
      <p>
        У вас отсутствуют активные заказы! Воспользуйтесь поиском, чтобы найти
        всё что нужно.
      </p>
      <Link href="/" className="secondary_btn" style={{ marginTop: "24px" }}>
        На главный
      </Link>
    </div>
  );
};
