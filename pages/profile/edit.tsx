import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Logout } from "./index";
import FullBanner from "../../components/fullBanner/FullBanner";
import { arrowRight } from "../../components/icons/icons";
import { Layout } from "../../components/layout/layout";
import ProfileNav from "../../components/Profile/NavBar/ProfileNav";
import styles from "./profile.module.css";

export default function Edit() {
  const [isLogout, setIsLogout] = useState(false);
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
              <p className="page_main_title">Личный кабинет</p>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className={styles.main_content}>
              <ProfileNav setIsLogout={setIsLogout} />
              <div className={styles.profile_grid}>
                <Link
                  href="/profile"
                  className="secondary_btn"
                  style={{ width: "fit-content" }}
                >
                  <span
                    style={{
                      transform: "rotate(180deg)",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    {arrowRight}
                  </span>
                  <p>Назад</p>
                </Link>
                <div className={styles.profile_comp_div}>
                  <p className={styles.profile_div_title}>Личные данные</p>
                  <div className={styles.form_div}>
                    <div className={styles.form_content_div}>
                      <label htmlFor="fullname">Ф.И.О</label>
                      <input type="text" id="fullname" placeholder="Ф.И.О" />
                    </div>
                    <div className={styles.form_content_div}>
                      <label htmlFor="phone">Телефон</label>
                      <input
                        type="text"
                        id="phone"
                        placeholder="+998 (--)--- -- --"
                      />
                    </div>
                    <div className={styles.form_content_div}>
                      <label htmlFor="email">E-mail</label>
                      <input type="text" id="email" placeholder="E-mail" />
                    </div>
                  </div>
                </div>
                <div className={styles.profile_comp_div}>
                  <p className={styles.profile_div_title}>Адрес</p>
                  <div className={styles.form_div}>
                    <div className={styles.form_content_div}>
                      <label htmlFor="district">Область</label>
                      <select id="district"></select>
                    </div>
                    <div className={styles.form_content_div}>
                      <label htmlFor="city">Город / Район</label>
                      <select id="city"></select>
                    </div>
                    <div className={styles.form_content_div}>
                      <label htmlFor="address">Адрес</label>
                      <input type="text" id="address" placeholder="Адрес" />
                    </div>
                    <div className={styles.form_content_div}>
                      <label htmlFor="post-index">Индекс почты</label>
                      <input
                        type="text"
                        id="post-index"
                        placeholder="Индекс почты"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.profile_comp_div}>
                  <p className={styles.profile_div_title}>Пароль</p>
                  <div className={styles.form_div}>
                    <div className={styles.form_content_div}>
                      <label htmlFor="password">Пароль</label>
                      <input type="text" id="password" placeholder="Пароль" />
                    </div>
                    <div className={styles.form_content_div}>
                      <label htmlFor="password2">Подтвердите пароль</label>
                      <input
                        type="text"
                        id="password2"
                        placeholder="Подтвердите пароль"
                      />
                    </div>
                    <span></span>
                    <div className={styles.grid2_buttons}>
                      <button type="button" className="disabled_btn">
                        Отменить
                      </button>
                      <button type="button" className="primary_btn">
                        Сохранить
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mobile_content_edit}>
              <div className={styles.profile_cont_div}>
                <p className={styles.profile_div_title}>Личные данные</p>
                <div className={styles.form_div}>
                  <div className={styles.form_content_div}>
                    <label htmlFor="fullname">Ф.И.О</label>
                    <input type="text" id="fullname" placeholder="Ф.И.О" />
                  </div>
                  <div className={styles.form_content_div}>
                    <label htmlFor="fullname">Номер телефона</label>
                    <input
                      type="text"
                      id="fullname"
                      placeholder="+998 (__) ___ __ __"
                    />
                  </div>
                  <div className={styles.form_content_div}>
                    <label htmlFor="fullname">E-mail</label>
                    <input type="text" id="fullname" placeholder="E-mail" />
                  </div>
                </div>
              </div>
              <div className={styles.profile_cont_div}>
                <p className={styles.profile_div_title}>Адрес</p>
                <div className={styles.form_div}>
                  <div className={styles.form_content_div}>
                    <label htmlFor="fullname">Область</label>
                    <select>
                      <option disabled>Область</option>
                    </select>
                  </div>
                  <div className={styles.form_content_div}>
                    <label htmlFor="fullname">Город / Район</label>
                    <select>
                      <option disabled>Город / Район</option>
                    </select>
                  </div>
                  <div className={styles.form_content_div}>
                    <label htmlFor="fullname">Адрес</label>
                    <input type="text" id="fullname" placeholder="Адрес" />
                  </div>
                  <div className={styles.form_content_div}>
                    <label htmlFor="fullname">Индекс почты</label>
                    <input
                      type="text"
                      id="fullname"
                      placeholder="Индекс почты"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.profile_cont_div}>
                <p className={styles.profile_div_title}>Пароль</p>
                <div className={styles.form_div}>
                  <div className={styles.form_content_div}>
                    <label htmlFor="fullname">Пароль</label>
                    <input type="password" id="fullname" placeholder="Пароль" />
                  </div>
                  <div className={styles.form_content_div}>
                    <label htmlFor="fullname">Подтвердите пароль</label>
                    <input
                      type="password"
                      id="fullname"
                      placeholder="Подтвердите пароль"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.grid2_buttons}>
                <Link href="/profile" className="disabled_btn">
                  Отменить
                </Link>
                <button type="button" className="primary_btn">
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        </section>
        <FullBanner />
        {isLogout && <Logout setIsLogout={setIsLogout} />}
      </Layout>
    </>
  );
}
