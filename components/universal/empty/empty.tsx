import Link from "next/link";
import Image from "next/image";
import styles from "./empty.module.css";
import comparisons from "../../../public/media/comparisons-img.png";
import wishes from "../../../public/media/wishes-img.png";
import cart from "../../../public/media/cart-img.png";

type Props = {
  variant: "comparisons" | "wishes" | "cart";
};

export function EmptyComponent({ variant }: Props) {
  return (
    <section>
      {variant === "comparisons" ? (
        <Comparisons />
      ) : variant === "wishes" ? (
        <Wishes />
      ) : variant === "cart" ? (
        <Cart />
      ) : null}
    </section>
  );
}

const Comparisons = () => {
  return (
    <div className={styles.component}>
      <Image
        src={comparisons}
        alt="empty image"
        loading="lazy"
        className={styles.main_image}
      />
      <div className={styles.component_content}>
        <div className={styles.component_texts}>
          <h3 className="section_title">Сравнивать пока нечего</h3>
          <p className={styles.component_desc}>
            Добавляйте товары к сравнению характеристики выбирайте самый
            подходящий вам товар
          </p>
        </div>
        <Link href="/" className="secondary_btn">
          На главную
        </Link>
      </div>
    </div>
  );
};

const Wishes = () => {
  return (
    <div className={styles.component}>
      <Image
        src={wishes}
        alt="empty image"
        loading="lazy"
        className={styles.main_image}
      />
      <div className={styles.component_content}>
        <div className={styles.component_texts}>
          <h3 className="section_title">В избранном пока ничего нет</h3>
          <p className={styles.component_desc}>
            Вы можете добавлять товары кликая на сердечко, которое ноходится
            прямо на карточке товара
          </p>
        </div>
        <Link href="/" className="secondary_btn">
          На главную
        </Link>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className={styles.component}>
      <Image
        src={cart}
        alt="empty image"
        loading="lazy"
        className={styles.main_image}
      />
      <div className={styles.component_content}>
        <div className={styles.component_texts}>
          <h3 className="section_title">В корзине пока нет товаров</h3>
          <p className={styles.component_desc}>
            Но вы всегда можете ее наполнить
          </p>
        </div>
        <Link href="/" className="secondary_btn">
          На главную
        </Link>
      </div>
    </div>
  );
};
