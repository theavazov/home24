import Head from "next/head";
import Link from "next/link";
import FullBanner from "../../components/fullBanner/FullBanner";
import { arrowRight } from "../../components/icons/icons";
import { Layout } from "../../components/layout/layout";
import ProfileNav from "../../components/Profile/NavBar/ProfileNav";
import styles from "./profile.module.css";
import ordersImage from "../../media/active_orders.png";
import Image from "next/image";
import { useState } from "react";
import { Logout } from "./index";

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
            <div className="main_text_content">
              <div className="page_node">
                <Link href="/" className="page_node_element active">
                  Главная
                </Link>
                {arrowRight}
                <p className="page_node_element">Личный кабинет</p>
                {arrowRight}
                <p className="page_node_element">Мои заказы</p>
              </div>
              <p className="page_main_title">Мои заказы</p>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className={styles.main_content}>
              <ProfileNav setIsLogout={setIsLogout} />
              <div className={styles.profile_grid}>
                <EmptyOrders />
              </div>
            </div>
            <div className={styles.mobile_content_orders}>
              <EmptyOrders />
            </div>
          </div>
        </section>
        <FullBanner />
        {isLogout && <Logout setIsLogout={setIsLogout} />}
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
