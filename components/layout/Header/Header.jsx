import {
  arrowDown,
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
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { LoginContext } from "../../../contexts/LoginContext";
import { UserContext } from "../../../contexts/UserContext";
import MainMenu from "../../MainMenu/MainMenu";
import uz from "../../../media/uz.png";
import ru from "../../../media/ru.png";
import en from "../../../media/en.png";

export default function Header({ isCatalogue, setIsCatalogue, isSearch }) {
  const router = useRouter();
  const pathname = router.pathname;
  const [isLangs, setIsLangs] = useState(false);

  const { setIsModal } = useContext(LoginContext);
  const { user } = useContext(UserContext);
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user"));
    if (storageUser !== null) {
      setIsUser(true);
    }
  }, []);

  const uzbek = useRef();
  const russian = useRef();
  const english = useRef();

  return (
    <header className={isSearch ? "hidden" : styles.header}>
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
            <div className={styles.mainChanger}>
              <div
                className={styles.langChanger}
                role="button"
                onClick={() => setIsLangs(!isLangs)}
              >
                <p>Рус</p>
                <span className={isLangs ? styles.rotate : styles.notrotate}>
                  {arrowDown}
                </span>
              </div>
              <div
                className={
                  isLangs
                    ? `${styles.lang_options_div} ${styles.show}`
                    : styles.lang_options_div
                }
              >
                <div
                  className={styles.lang}
                  value="uz"
                  role={"button"}
                  ref={uzbek}
                  onClick={(e) => console.log(e.target.parentElement)}
                >
                  <p>O’zbekcha</p>
                  <Image src={uz} alt="uz" />
                </div>
                <div
                  className={styles.lang}
                  value="ru"
                  role={"button"}
                  ref={russian}
                  onClick={(e) => console.log(e.target.parentElement)}
                >
                  <p>Русский</p>
                  <Image src={ru} alt="ru" />
                </div>
                <div
                  className={styles.lang}
                  value="en"
                  role={"button"}
                  ref={english}
                  onClick={(e) => console.log(e.target.parentElement)}
                >
                  <p>English</p>
                  <Image src={en} alt="en" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className={`container ${styles.header_inner}`}>
        <Link className={styles.logo} href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <div
          className={styles.category_btn}
          role="button"
          onClick={() => setIsCatalogue(!isCatalogue)}
        >
          <div className={styles.hamburger}>
            <span className={isCatalogue ? styles.rotate45 : ""}></span>
            <span className={isCatalogue ? "hidden" : ""}></span>
            <span className={isCatalogue ? styles.rotateMinus45 : ""}></span>
          </div>
          <p>Каталог</p>
        </div>
        <div className={styles.search_div}>
          <input type="text" placeholder="Искать" />
          <button className={styles.search_btn}>{search}</button>
        </div>
        <div className={styles.extra_div}>
          <Link
            href="/comparisons"
            className={
              pathname == "/comparisons"
                ? `${styles.gap8div_active} ${styles.gap8_div}`
                : `${styles.gap8_div}`
            }
          >
            {swap}
            <p>Сравнение</p>
          </Link>
          <Link
            href="/wishes"
            className={
              pathname == "/wishes"
                ? `${styles.gap8div_active} ${styles.gap8_div}`
                : `${styles.gap8_div}`
            }
          >
            {heart}
            <p>Избранное</p>
          </Link>
          <Link
            href="/cart/"
            className={
              pathname.includes("cart")
                ? `${styles.gap8div_active} ${styles.gap8_div}`
                : `${styles.gap8_div}`
            }
          >
            {bag}
            <span className={styles.bags_products}>99+</span>
            <p>Корзина</p>
          </Link>
          {isUser ? (
            <UserLink user={user} />
          ) : (
            <ModalOpener setIsModal={setIsModal} />
          )}
        </div>
      </div>
      <div className={styles.mobile_header}>
        <div className={styles.mobile_top}>
          <Link className={styles.logo} href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <div className={styles.mainChanger}>
            <div
              className={styles.langChanger}
              role="button"
              onClick={() => setIsLangs(!isLangs)}
            >
              <p>Рус</p>
              <span className={isLangs ? styles.rotate : styles.notrotate}>
                {arrowDown}
              </span>
            </div>
            <div
              className={
                isLangs
                  ? `${styles.lang_options_div} ${styles.show}`
                  : styles.lang_options_div
              }
            >
              <div
                className={styles.lang}
                value="uz"
                role={"button"}
                ref={uzbek}
                onClick={(e) => console.log(e.target.parentElement)}
              >
                <p>O’zbekcha</p>
                <Image src={uz} alt="uz" />
              </div>
              <div
                className={styles.lang}
                value="ru"
                role={"button"}
                ref={russian}
                onClick={(e) => console.log(e.target.parentElement)}
              >
                <p>Русский</p>
                <Image src={ru} alt="ru" />
              </div>
              <div
                className={styles.lang}
                value="en"
                role={"button"}
                ref={english}
                onClick={(e) => console.log(e.target.parentElement)}
              >
                <p>English</p>
                <Image src={en} alt="en" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobile_bottom}>
          <Link href="/search" className={styles.category_btn} role="button">
            <div className={styles.hamburger}>
              <span className={isCatalogue ? styles.rotate45 : ""}></span>
              <span className={isCatalogue ? "hidden" : ""}></span>
              <span className={isCatalogue ? styles.rotateMinus45 : ""}></span>
            </div>
            <p>Каталог</p>
          </Link>
          <div className={styles.search_div}>
            <input type="text" placeholder="Искать" />
            <button className={styles.search_btn}>{search}</button>
          </div>
        </div>
      </div>
      <MainMenu isCatalogue={isCatalogue} />
    </header>
  );
}

const UserLink = ({ user }) => {
  return (
    <Link href="/profile/orders" className={styles.gap8_div}>
      {login}
      <p>{user.name}</p>
    </Link>
  );
};

const ModalOpener = ({ setIsModal }) => {
  return (
    <div
      role={"button"}
      onClick={() => setIsModal(true)}
      className={styles.gap8_div}
    >
      {login}
      <p>Войти</p>
    </div>
  );
};
