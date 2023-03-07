import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import qr from "../../../public/media/qr.png";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  apple,
  arrowDown,
  facebook,
  googleplay,
  instagram,
  telegram,
} from "../../../public/icons";

export function Footer() {
  const { pathname } = useRouter();

  const [isMargin, setIsMargin] = useState<boolean>(false);

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/comparisons" ||
      pathname === "/wishes" ||
      pathname === "/discounts" ||
      pathname === "/404" ||
      pathname === "/500" ||
      pathname === "/search" ||
      pathname === "/faq" ||
      pathname === "/about" ||
      pathname.includes("/cart") ||
      pathname.includes("/blog")
    ) {
      setIsMargin(true);
    }
  }, [pathname]);

  const socialmedia = [
    {
      id: 1,
      title: "instagram",
      path: "#",
      icon: instagram,
    },
    {
      id: 2,
      title: "telegram",
      path: "#",
      icon: telegram,
    },
    {
      id: 3,
      title: "facebook",
      path: "#",
      icon: facebook,
    },
  ];

  const navigation = [
    {
      id: 1,
      title: "Информация",
      children: [
        {
          title: "О компании",
          path: "/about",
        },
        {
          title: "Наши партнеры",
          path: "#",
        },
        {
          title: "Блог",
          path: "/blog",
        },
        {
          title: "О наших акциях и скидках",
          path: "/discounts",
        },
        {
          title: "Пользовательское соглашение",
          path: "#",
        },
      ],
    },
    {
      id: 2,
      title: "Поддержка и сервис",
      children: [
        {
          title: "Вопросы и ответы",
          path: "/faq",
        },
        {
          title: "Отзывы",
          path: "#",
        },
        {
          title: "Контакты",
          path: "#",
        },
        {
          title: "Для партнеров",
          path: "#",
        },
      ],
    },
    {
      id: 3,
      title: "Профиль",
      children: [
        {
          title: "Личный кабинет",
          path: "/profile",
        },
        {
          title: "Избранные товары",
          path: "/wishes",
        },
        {
          title: "Список сравнения",
          path: "/comparisons",
        },
        {
          title: "Мои заказы",
          path: "/profile/orders",
        },
      ],
    },
  ];

  return (
    <footer className={isMargin ? styles.footer : ""}>
      <div className={`container ${styles.footer_inner}`}>
        <div className={styles.footer_top}>
          {navigation.map((nav) => {
            return (
              <div key={nav.id} className={styles.footer_top_div}>
                <h4 className={styles.footer_top_title}>{nav.title}</h4>
                <nav className={styles.footer_top_nav}>
                  {nav.children.map((link: any, i: number) => {
                    return (
                      <Link key={i} href={link.path}>
                        {link.title}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            );
          })}
          <div className={styles.footer_top_div}>
            <h4 className={styles.footer_top_title}>Контакты</h4>
            <div className={styles.footer_top_last}>
              <nav className={styles.footer_top_nav}>
                <a
                  className={styles.footer_outer_link}
                  href="tel:+998712007002"
                >
                  <span>Телефон:</span>
                  <span>+998 (71) 200-7-002</span>
                </a>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  href="https://goo.gl/maps/gCSsCXxRAoRtpc3u9"
                >
                  Ташкент, ул. Коратош, 106
                </a>
              </nav>
              <div className="qr_div">
                <div className="qr">
                  <Image src={qr} alt="qr code" />
                </div>
                <p className="qr_text">
                  Наведите камеру на QR-код, чтобы найти местоположение
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <div className={styles.footer_bottom_left}>
            <nav className={styles.footer_social_media}>
              {socialmedia.map((sm) => {
                return (
                  <a
                    key={sm.id}
                    href={sm.path}
                    aria-label={sm.title}
                    target={"_blank"}
                    rel="noreferrer"
                    className={styles.footer_icon_div}
                  >
                    {sm.icon}
                  </a>
                );
              })}
            </nav>
            <p className={styles.footer_copy_text}>
              &copy; {new Date().getFullYear()} ООО «Интернет магазин «Home24».
            </p>
          </div>
          <div className={styles.footer_bottom_right}>
            <p className={styles.footer_right_text}>Мобильное приложение:</p>
            <nav className={styles.footer_social_media}>
              <a
                href="#"
                aria-label="appstore"
                className={styles.footer_icon_div}
              >
                {apple}
              </a>
              <a
                href="#"
                aria-label="googleplay"
                className={`${styles.footer_icon_div} ${styles.googleplay}`}
              >
                {googleplay}
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.mobile_footer}>
        <div className="container">
          <Accordion>
            {navigation.map((nav) => {
              return (
                <Accordion.Item
                  key={nav.id}
                  eventKey={`${nav.id}`}
                  className={styles.footer_accordion}
                >
                  <Accordion.Header
                    className={styles.footer_accordion_btn}
                    role="button"
                  >
                    <h4 className={styles.footer_top_title}>{nav.title}</h4>
                    {arrowDown}
                  </Accordion.Header>
                  <Accordion.Body className={styles.footer_accordion_body}>
                    {nav.children.map((link: any, i: number) => {
                      return (
                        <Link
                          key={i}
                          href={link.path}
                          className={styles.accordion_link}
                        >
                          {link.title}
                        </Link>
                      );
                    })}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
          <div className={styles.mobile_qr}>
            <div className="qr_div">
              <div className="qr">
                <Image src={qr} alt="qr code" />
              </div>
              <p className="qr_text">
                Наведите камеру на QR-код, чтобы найти местоположение
              </p>
            </div>
          </div>
          <nav className={styles.footer_social_media}>
            {socialmedia.map((sm) => {
              return (
                <a
                  key={sm.id}
                  href={sm.path}
                  aria-label={sm.title}
                  className={styles.footer_icon_div}
                >
                  {sm.icon}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
