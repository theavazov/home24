import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import FullBanner from "../../components/fullBanner/FullBanner";
import {
  arrowRight,
  bell,
  cart,
  edit,
  swap,
} from "../../components/icons/icons";
import Layout from "../../components/layout/Layout";
import ProfileNav from "../../components/Profile/NavBar/ProfileNav";
import { LoginContext } from "../../contexts/LoginContext";
import styles from "./Profile.module.css";
import logo from "../../media/logo.png";
import { useRouter } from "next/router";

export default function Profile() {
  const [isLogout, setIsLogout] = useState(false);
  const [storageUser, setStorageUser] = useState(null);

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    if (localStorageUser !== null) setStorageUser(localStorageUser);
  }, []);

  const { setIsModal } = useContext(LoginContext);
  return (
    <>
      <Head>
        <title>Home 24 | Profile</title>
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
              </div>
              <p className="page_main_title">Личный кабинет</p>
            </div>
          </div>
        </section>
        <section>
          <div className={`container ${styles.profile_container}`}>
            <div className={styles.main_content}>
              <ProfileNav isLogout={isLogout} setIsLogout={setIsLogout} />
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
            <div className={styles.mobile_content}>
              {storageUser !== null ? (
                <FullUser user={storageUser} setIsLogout={setIsLogout} />
              ) : (
                <EmptyUser setIsModal={setIsModal} />
              )}
            </div>
          </div>
        </section>
        <FullBanner />
        {isLogout && <Logout setIsLogout={setIsLogout} />}
      </Layout>
    </>
  );
}

const EmptyUser = ({ setIsModal }) => {
  return (
    <div className={styles.emptyUser_container}>
      <div className={styles.emptyUser_content}>
        <Image src={logo} alt="logo" />
        <p>
          Войдите, чтобы получить доступ к корзине и списку желаний вашего
          аккаунта
        </p>
      </div>
      <Link href="/comparisons" className={styles.essiz_link}>
        {swap}
        <p>Сравнение</p>
        {arrowRight}
      </Link>
      <div className={styles.emptyUser_btn}>
        <button
          type="button"
          className="primary_btn"
          onClick={() => {
            setIsModal(true);
          }}
          style={{ width: "100%" }}
        >
          Войти
        </button>
      </div>
    </div>
  );
};

const FullUser = ({ user, setIsLogout }) => {
  return (
    <div className={styles.fullUser_container}>
      <Link href="/profile/edit" className={styles.edit_page_link}>
        <div className={styles.user_info_div}>
          <p>{user.name}</p>
          <p>+998 {user.number}</p>
        </div>
        {arrowRight}
      </Link>
      <Link href="/profile/orders" className={styles.essiz_link}>
        {cart}
        <p>Мои заказы</p>
        {arrowRight}
      </Link>
      <Link href="/comparisons" className={styles.essiz_link}>
        {swap}
        <p>Сравнение</p>
        {arrowRight}
      </Link>
      <div className={styles.essiz_link}>
        {bell}
        <p>Уведомления</p>
        <div className={styles.checkedinput}>
          <label className={styles.cont}>
            <input type="checkbox" />
            <div className={styles.switch}></div>
          </label>
        </div>
      </div>
      <div className={styles.emptyUser_btn}>
        <button
          type="button"
          className="primary_btn"
          onClick={() => {
            setIsLogout(true);
          }}
          style={{ width: "100%" }}
        >
          Выйти
        </button>
      </div>
    </div>
  );
};

const Logout = ({ setIsLogout }) => {
  const router = useRouter();
  const onSave = () => {
    localStorage.removeItem("user");
    setIsLogout(false);
    router.push("/");
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_content_header}>
          <p className={styles.modal_content_headerText}>
            Сохранить перед выходом ?
          </p>
          <div
            role={"button"}
            className={styles.modalCloser}
            onClick={() => setIsLogout(false)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.modal_content_body}>
          <button type="button" onClick={() => setIsLogout(false)}>
            Отменить
          </button>
          <button type="button" onClick={onSave}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};
