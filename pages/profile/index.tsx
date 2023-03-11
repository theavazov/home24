import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { arrowRight, bell, cart, edit, swap } from "../../public/icons";
import { Layout } from "../../components/layout/layout";
import styles from "../../styles/profile.module.css";
import { Location } from "../../components/utils/location/location";
import { MiniFullBanner } from "../../components/banners/minifull/minifull";
import ProfileNav from "../../components/universal/sidebar/sidebar";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Home 24 | Profile</title>
      </Head>
      <Layout>
        <section>
          <div className="container">
            <Location location={"Личный кабинет"} />
          </div>
        </section>
        <section>
          <div className={`container ${styles.profile_container}`}>
            <div className={styles.main_content}>
              <ProfileNav />
              <div className={styles.profile_div}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <div className={styles.component_div}>
                    <div className={styles.component_div_header}>
                      <p>Персональные данные</p>
                      <Link
                        href="/profile/edit"
                        className="secondary_btn"
                        role={"button"}
                      >
                        {edit}
                        <p>Изменить</p>
                      </Link>
                    </div>
                    <div className={styles.component_div_body}>
                      <div className={styles.keyValue}>
                        <p className={styles.key}>Имя:</p>
                        <p className={styles.value}>Admin</p>
                      </div>
                      <div className={styles.keyValue}>
                        <p className={styles.key}>E-mail:</p>
                        <p className={styles.value}>Пусто</p>
                      </div>
                      <div className={styles.keyValue}>
                        <p className={styles.key}>Пароль:</p>
                        <p className={styles.value}>********</p>
                      </div>
                      <div className={styles.keyValue}>
                        <p className={styles.key}>Телефон:</p>
                        <p className={styles.value}>+998 (99) 121 28 21</p>
                      </div>
                      <div className={styles.keyValue}>
                        <p className={styles.key}>Адресс:</p>
                        <p className={styles.value}>Пусто</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.component_div}>
                  <div className={styles.component_div_header}>
                    <p>Уведомления или новости</p>
                  </div>
                  <div className={styles.component_div_body}>
                    <p>Получайте информацию об акциях и скидках</p>
                    <div className={styles.checkedinput}>
                      <label className={styles.cont}>
                        <input type="checkbox" />
                        <div className={styles.switch}></div>
                      </label>
                      <p>через СМС</p>
                    </div>
                  </div>
                </div>
                {/* <div className={styles.component_div}>
                  <div className={styles.component_div_header}>
                    <p>Активные заказы</p>
                  </div>
                  <div className={styles.component_div_body}>
                    <EmptyOrders />
                  </div>
                </div> */}
              </div>
            </div>
            <div className={styles.mobile_content}></div>
          </div>
        </section>
        <MiniFullBanner />
      </Layout>
    </>
  );
}
