import {
  bag,
  heart,
  instagram,
  location,
  login,
  search,
  swap,
  telegram,
} from "../../icons/icons";
import styles from "./Header.module.css";
import logo from "../../../media/logo.png";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className={styles.header_top_div}>
        <div className={`container ${styles.header_top_div_inner}`}>
          <a href="#" className={styles.header_top_address}>
            <div className={styles.header_top_address_logo}>
              {location}
              <p>Город:</p>
            </div>
            <p className={styles.underline}>Ташкент</p>
          </a>
          <nav className={styles.header_top_nav}>
            <a href="#" className={styles.header_top_link}>
              {instagram}
              <span>home24.uz</span>
            </a>
            <a href="#" className={styles.header_top_link}>
              {telegram}
              <span>t.me/home24uz</span>
            </a>
            <a
              href="tel:+998712007002"
              className={styles.header_top_phone_number}
            >
              +998 71 200 7 002
            </a>
            <select className={styles.langChanger}>
              <option value="ru">Рус</option>
              <option value="uz">O&apos;zb</option>
            </select>
          </nav>
        </div>
      </div>
      <div className={`container ${styles.header_inner}`}>
        <Link className={styles.logo} href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <div className={styles.category_btn} role="button">
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Каталог</p>
        </div>
        <div className={styles.search_div}>
          <input type="text" placeholder="Искать" />
          <button className={styles.search_btn}>{search}</button>
        </div>
        <div className={styles.extra_div}>
          <div className={styles.gap8_div}>
            {swap}
            <p>Сравнение</p>
          </div>
          <div className={styles.gap8_div}>
            {heart}
            <p>Избранное</p>
          </div>
          <div className={styles.gap8_div}>
            {bag}
            <span className={styles.bags_products}>99+</span>
            <p>Корзина</p>
          </div>
          <div className={styles.gap8_div}>
            {login}
            <p>Войти</p>
          </div>
        </div>
      </div>
    </header>
  );
}
