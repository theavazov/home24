import styles from "./loaders.module.css";

type Props = {
  customClass?: string | any;
};

export function BrandsLoader() {
  return (
    <div className="container brands_container">
      <div className={`skeleton ${styles.brand}`}></div>
      <div className={`skeleton ${styles.brand}`}></div>
      <div className={`skeleton ${styles.brand}`}></div>
      <div className={`skeleton ${styles.brand}`}></div>
      <div className={`skeleton ${styles.brand}`}></div>
      <div className={`skeleton ${styles.brand}`}></div>
    </div>
  );
}

export function CategoriesLoader({ customClass }: Props) {
  return (
    <div className={customClass ? customClass : "categories_container"}>
      <div className={`skeleton ${styles.category}`}></div>
      <div className={`skeleton ${styles.category}`}></div>
      <div className={`skeleton ${styles.category}`}></div>
      <div className={`skeleton ${styles.category}`}></div>
      <div className={`skeleton ${styles.category}`}></div>
      <div className={`skeleton ${styles.category}`}></div>
    </div>
  );
}

export function BlogsLoader() {
  return (
    <div className="blog_container">
      <div className={`skeleton ${styles.blog}`}></div>
      <div className={`skeleton ${styles.blog}`}></div>
      <div className={`skeleton ${styles.blog}`}></div>
      <div className={`skeleton ${styles.blog}`}></div>
    </div>
  );
}

export function ProductsLoader() {
  return (
    <div className="products_container">
      <div className={`skeleton ${styles.product}`}></div>
      <div className={`skeleton ${styles.product}`}></div>
      <div className={`skeleton ${styles.product}`}></div>
      <div className={`skeleton ${styles.product}`}></div>
      <div className={`skeleton ${styles.product}`}></div>
      <div className={`skeleton ${styles.product}`}></div>
    </div>
  );
}
