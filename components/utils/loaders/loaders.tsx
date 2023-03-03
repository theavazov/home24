import styles from "./loaders.module.css";

export function BrandsLoader() {
  return (
    <div className="container grid6_brands">
      <div className={`skeleton ${styles.brand}`}></div>
      <div className={`skeleton ${styles.brand}`}></div>
      <div className={`skeleton ${styles.brand}`}></div>
      <div className={`skeleton ${styles.brand}`}></div>
      <div className={`skeleton ${styles.brand}`}></div>
      <div className={`skeleton ${styles.brand}`}></div>
    </div>
  );
}

export function CategoriesLoader() {
  return (
    <div className="grid6">
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
    <div>
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
