import Head from "next/head";
import Link from "next/link";
import FullBanner from "../../components/fullBanner/FullBanner";
import { arrowRight } from "../../components/icons/icons";
import Layout from "../../components/layout/Layout";
import ProfileNav from "../../components/Profile/NavBar/ProfileNav";
import styles from "./Profile.module.css";
import ordersImage from "../../media/active_orders.png";
import Image from "next/image";

export default function Orders() {
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
              <ProfileNav />
              <div className={styles.profile_grid}>
                <EmptyOrders />
              </div>
            </div>
          </div>
        </section>
        <FullBanner />
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
      <p>Ещё не успели заказать?</p>
      <Link href="/" className="text_btn" style={{ marginTop: "24px" }}>
        На главный
      </Link>
    </div>
  );
};
