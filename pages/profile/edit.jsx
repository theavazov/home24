import Head from "next/head";
import Link from "next/link";
import { arrowRight } from "../../components/icons/icons";
import Layout from "../../components/layout/Layout";
import ProfileNav from "../../components/Profile/NavBar/ProfileNav";
import styles from "./Profile.module.css";

export default function Edit() {
  return (
    <>
      <Head>
        <title>Home 24 | Ma&apos;lumotlarni o&apos;zgartirish</title>
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
                <p className="page_node_element">Изменить</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className={styles.main_content}>
              <ProfileNav />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
