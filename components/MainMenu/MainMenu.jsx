import { useState } from "react";
import styles from "./MainMenu.module.css";

export default function MainMenu({ isCatalogue }) {
  const categories = [
    {
      id: 1,
      category_name: "Техника",
      categories: [
        {
          id: 1,
          category_name: "Для красоты и здоровья",
          subcategories: [
            {
              id: 1,
              subcategory_title: "Выпрямители",
            },
            {
              id: 2,
              subcategory_title: "Машинки для стрижки волос",
            },
            {
              id: 3,
              subcategory_title: "Плойки",
            },
          ],
        },
        {
          id: 2,
          category_name: "Техника для дома",
          subcategories: [
            {
              id: 1,
              subcategory_title: "Стиральные машины",
            },
            {
              id: 2,
              subcategory_title: "Обогреватели",
            },
            {
              id: 3,
              subcategory_title: "Пылесосы",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      category_name: "Мебель",
      categories: [
        {
          id: 1,
          category_name: "Офисная мебель",
          subcategories: [
            {
              id: 1,
              subcategory_title: "Геймерские кресла ",
            },
          ],
        },
        {
          id: 2,
          category_name: "Мягкая мебель",
          subcategories: [
            {
              id: 1,
              subcategory_title: "Стиральные машины",
            },
            {
              id: 2,
              subcategory_title: "Обогреватели",
            },
            {
              id: 3,
              subcategory_title: "Пылесосы",
            },
          ],
        },
      ],
    },
  ];
  const [toggleState, setToggleState] = useState(1);
  return (
    <div
      className={
        isCatalogue ? `${styles.mainMenu} ${styles.show}` : styles.mainMenu
      }
    >
      <div className={`${styles.mainMenu_inner} container`}>
        <div className={styles.tab_category_container}>
          {categories.map((category) => {
            return (
              <div
                key={category.id}
                className={styles.tab_category}
                role="button"
                onMouseOver={() => setToggleState(category.id)}
              >
                <p
                  className={
                    category.id === toggleState
                      ? `${styles.tab_category_title} ${styles.active}`
                      : styles.tab_category_title
                  }
                >
                  {category.category_name}
                </p>
              </div>
            );
          })}
        </div>
        <div className={styles.tab_category_content}>
          {categories.map((category) => {
            if (category.id === toggleState) {
              return <CategoryContent key={category.id} category={category} />;
            }
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}

const CategoryContent = ({ category }) => {
  return (
    <div className={styles.active_content} key={category.category_name}>
      <p className={styles.active_category_title} key={category.category_name}>
        {category.category_name}
      </p>
      <div className={styles.categories_container}>
        {category.categories.map((subcategory) => {
          return (
            <div key={subcategory.category_name}>
              <p className={styles.subcategory_title}>
                {subcategory.category_name}
              </p>
              <div className={styles.subsubcategory_container}>
                {subcategory.subcategories.map((subsubcategory) => {
                  return (
                    <p
                      className={styles.subsubcategory_title}
                      key={subcategory.subcategory_title}
                    >
                      - {subsubcategory.subcategory_title}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
