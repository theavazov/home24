import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import qr from "../../../media/qr.png";
import {
  apple,
  arrowDown,
  facebook,
  googleplay,
  instagram,
  telegram,
} from "../../icons/icons";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer({ isSearch }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <footer className={isSearch ? "hidden" : styles.footer}>
      <div className={`container ${styles.footer_inner}`}>
        <div className={styles.footer_top}>
          <div className={styles.footer_top_div}>
            <p className={styles.footer_top_title}>Компания</p>
            <nav className={styles.footer_top_nav}>
              <Link href="#">О компании</Link>
              <Link href="#">Вакансии</Link>
              <Link href="#">Новости</Link>
              <Link href="#">Торговые марки</Link>
              <Link href="#">Политика конфиденциальности</Link>
              <Link href="#">Пользовательское соглашение</Link>
            </nav>
          </div>
          <div className={styles.footer_top_div}>
            <p className={styles.footer_top_title}>Клиентам</p>
            <nav className={styles.footer_top_nav}>
              <Link href="#">Как оформить заказ</Link>
              <Link href="#">Доставка товара</Link>
              <Link href="#">Оплата товара</Link>
              <Link href="#">Получение товара</Link>
              <Link href="#">Помощь покупателям</Link>
              <Link href="#">Подарочная карта</Link>
            </nav>
          </div>
          <div className={styles.footer_top_div}>
            <p className={styles.footer_top_title}>Партнёрам</p>
            <nav className={styles.footer_top_nav}>
              <Link href="#">Поставщикам упаковки</Link>
              <Link href="#">Поддержка бизнеса</Link>
              <Link href="#">Создание сайтов</Link>
              <Link href="#">Тендеры на перевозки</Link>
              <Link href="#">Помощь покупателям</Link>
              <Link href="#">Открыть пункт выдачи</Link>
            </nav>
          </div>
          <div className={styles.footer_top_div}>
            <p className={styles.footer_top_title}>Контакты</p>
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
              <a
                href="#"
                aria-label="instagram"
                className={styles.footer_icon_div}
              >
                {instagram}
              </a>
              <a
                href="#"
                aria-label="telegram"
                className={styles.footer_icon_div}
              >
                {telegram}
              </a>
              <a
                href="#"
                aria-label="facebook"
                className={styles.footer_icon_div}
              >
                {facebook}
              </a>
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
                className={styles.footer_icon_div}
              >
                <span style={{ marginLeft: "3px", marginTop: "2px" }}>
                  {googleplay}
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.mobile_footer}>
        <div className="container">
          <Accordion>
            <Accordion.Item eventKey="0" className={styles.footer_accordion}>
              <Accordion.Header
                className={styles.footer_accordion_btn}
                role="button"
              >
                <p>Информация</p>
                {arrowDown}
              </Accordion.Header>
              <Accordion.Body
                className={
                  isClicked
                    ? `${styles.footer_accordion_body} ${styles.show}`
                    : styles.footer_accordion_body
                }
              >
                <Link href="#" className={styles.accordion_link}>
                  О компании
                </Link>
                <Link href="#" className={styles.accordion_link}>
                  Наши партнеры
                </Link>
                <Link href="#" className={styles.accordion_link}>
                  Блог
                </Link>
                <Link href="#" className={styles.accordion_link}>
                  О наших акциях и скидках
                </Link>
                <Link href="#" className={styles.accordion_link}>
                  Пользовательское соглашение
                </Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className={styles.footer_accordion}>
              <Accordion.Header
                className={styles.footer_accordion_btn}
                role="button"
              >
                <p>Информация</p>
                {arrowDown}
              </Accordion.Header>
              <Accordion.Body
                className={
                  isClicked
                    ? `${styles.footer_accordion_body} ${styles.show}`
                    : styles.footer_accordion_body
                }
              >
                <Link href="#" className={styles.accordion_link}>
                  О компании
                </Link>
                <Link href="#" className={styles.accordion_link}>
                  Наши партнеры
                </Link>
                <Link href="#" className={styles.accordion_link}>
                  Блог
                </Link>
                <Link href="#" className={styles.accordion_link}>
                  О наших акциях и скидках
                </Link>
                <Link href="#" className={styles.accordion_link}>
                  Пользовательское соглашение
                </Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className={styles.footer_accordion}>
              <Accordion.Header
                className={styles.footer_accordion_btn}
                role="button"
              >
                <p>Информация</p>
                {arrowDown}
              </Accordion.Header>
              <Accordion.Body
                className={
                  isClicked
                    ? `${styles.footer_accordion_body} ${styles.show}`
                    : styles.footer_accordion_body
                }
              >
                <Link href="#" className={styles.accordion_link}>
                  О компании
                </Link>
                <Link href="#" className={styles.accordion_link}>
                  Наши партнеры
                </Link>
                <Link href="#" className={styles.accordion_link}>
                  Блог
                </Link>
                <Link href="#" className={styles.accordion_link}>
                  О наших акциях и скидках
                </Link>
                <Link href="#" className={styles.accordion_link}>
                  Пользовательское соглашение
                </Link>
              </Accordion.Body>
            </Accordion.Item>
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
            <a
              href="#"
              aria-label="instagram"
              className={styles.footer_icon_div}
            >
              {instagram}
            </a>
            <a
              href="#"
              aria-label="telegram"
              className={styles.footer_icon_div}
            >
              {telegram}
            </a>
            <a
              href="#"
              aria-label="facebook"
              className={styles.footer_icon_div}
            >
              {facebook}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
