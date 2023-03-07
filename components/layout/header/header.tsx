import styles from "./header.module.css";
import logo from "../../../public/media/logo.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import MainMenu from "../../MainMenu/MainMenu";
import uz from "../../../public/media/uz.png";
import ru from "../../../public/media/ru.png";
import en from "../../../public/media/en.png";
import { ModalContext } from "../../../contexts/modal";
import {
  bag,
  swap,
  heart,
  login,
  arrowDown,
  instagram,
  location,
  search,
  telegram,
  chevron,
  sale,
} from "../../../public/icons";
import { SearchContext } from "../../../contexts/search";
import { CategoriesContext } from "../../../contexts/categories";

export function Header({
  isCatalogue,
  setIsCatalogue,
}: {
  isCatalogue: boolean;
  setIsCatalogue: Function;
}) {
  const { pathname, locale, locales, asPath, push } = useRouter();
  const [isLangs, setIsLangs] = useState(false);
  const { setVariant, setIsModal } = useContext(ModalContext);
  const { query, setQuery } = useContext(SearchContext);

  const navigation = [
    {
      title: "Сравнение",
      path: "/comparisons",
      icon: swap,
      isActive: pathname === "/comparisons" ? true : false,
    },
    {
      title: "Избранное",
      path: "/wishes",
      icon: heart,
      isActive: pathname === "/wishes" ? true : false,
    },
    {
      title: "Корзина",
      path: "/cart",
      icon: bag,
      isActive: pathname === "/cart" ? true : false,
    },
  ];

  const { categories, isLoading } = useContext(CategoriesContext);

  const navCategories = categories.slice(0, 6);

  // useEffect(() => {
  //   const storageUser = JSON.parse(localStorage.getItem("user"));
  //   if (storageUser !== null) {
  //     setIsUser(true);
  //   }
  // }, []);

  return (
    <header className={styles.header}>
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
                <p className={styles.locale}>{locale}</p>
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
                {locales?.map((sl) => {
                  if (sl === "ru") {
                    return (
                      <Link
                        key={sl}
                        href={asPath}
                        locale={sl}
                        className={styles.lang}
                        onClick={() => setIsLangs(false)}
                      >
                        <p>Русский</p>
                        <Image src={ru} alt="ru" />
                      </Link>
                    );
                  } else if (sl === "uz") {
                    return (
                      <Link
                        key={sl}
                        href={asPath}
                        locale={sl}
                        className={styles.lang}
                        onClick={() => setIsLangs(false)}
                      >
                        <p>O’zbekcha</p>
                        <Image src={uz} alt="ru" />
                      </Link>
                    );
                  } else if (sl === "en") {
                    return (
                      <Link
                        key={sl}
                        href={asPath}
                        locale={sl}
                        className={styles.lang}
                        onClick={() => setIsLangs(false)}
                      >
                        <p>English</p>
                        <Image src={en} alt="ru" />
                      </Link>
                    );
                  }
                })}
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
        <form
          className={styles.search_div}
          onSubmit={() => {
            push(`/search?q=${query}`);
            console.log(query);
          }}
        >
          <input
            type="text"
            placeholder="Искать"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            required
          />
          <button type="submit" className={styles.search_btn}>
            {search}
          </button>
        </form>
        <div className={styles.extra_div}>
          {navigation.map((nav: any, i: number) => {
            return (
              <Link
                key={i}
                href={nav.path}
                className={
                  nav.isActive
                    ? `${styles.extra_nav} ${styles.active}`
                    : `${styles.extra_nav}`
                }
              >
                {nav.icon}
                {nav.title}
              </Link>
            );
          })}
          <div
            className={styles.extra_nav}
            onClick={() => {
              setVariant("check");
              setIsModal(true);
            }}
          >
            {login} Войти
          </div>
        </div>
      </div>
      <nav className={`container ${styles.header_bottom}`}>
        {isLoading ? (
          <>
            <p className={`skeleton ${styles.tipa_bottom_item}`}></p>
            <p className={`skeleton ${styles.tipa_bottom_item}`}></p>
            <p className={`skeleton ${styles.tipa_bottom_item}`}></p>
            <p className={`skeleton ${styles.tipa_bottom_item}`}></p>
            <p className={`skeleton ${styles.tipa_bottom_item}`}></p>
            <p className={`skeleton ${styles.tipa_bottom_item}`}></p>
          </>
        ) : (
          navCategories.map((category: any, i: number) => {
            const name =
              locale === "ru"
                ? category?.name.ru
                : locale === "uz"
                ? category?.name.uz
                : locale === "en"
                ? category?.name.en
                : "";

            return (
              <Link
                key={i}
                href={`/${category.slug}`}
                className={styles.bottom_nav_item}
              >
                {name}
              </Link>
            );
          })
        )}
        <Link href={`/discounts`} className={styles.bottom_nav_item}>
          {sale} Акции
        </Link>
        <button
          className={
            isCatalogue
              ? `${styles.bottom_nav_item} ${styles.active}`
              : styles.bottom_nav_item
          }
          onClick={() => setIsCatalogue(true)}
        >
          Ещё {chevron}
        </button>
      </nav>
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
              <p className={styles.locale}>{locale}</p>
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
              {locales?.map((sl) => {
                if (sl === "ru") {
                  return (
                    <Link
                      key={sl}
                      href={asPath}
                      locale={sl}
                      className={styles.lang}
                      onClick={() => setIsLangs(false)}
                    >
                      <p>Русский</p>
                      <Image src={ru} alt="ru" />
                    </Link>
                  );
                } else if (sl === "uz") {
                  return (
                    <Link
                      key={sl}
                      href={asPath}
                      locale={sl}
                      className={styles.lang}
                      onClick={() => setIsLangs(false)}
                    >
                      <p>O’zbekcha</p>
                      <Image src={uz} alt="ru" />
                    </Link>
                  );
                } else if (sl === "en") {
                  return (
                    <Link
                      key={sl}
                      href={asPath}
                      locale={sl}
                      className={styles.lang}
                      onClick={() => setIsLangs(false)}
                    >
                      <p>English</p>
                      <Image src={en} alt="ru" />
                    </Link>
                  );
                }
              })}
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

const UserLink = ({ user }: { user: any }) => {
  return (
    <Link href="/profile/orders" className={styles.gap8_div}>
      {login}
      <p>{user.name}</p>
    </Link>
  );
};

const ModalOpener = ({ setIsModal }: { setIsModal: Function }) => {
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
