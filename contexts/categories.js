import { createContext, useEffect, useState } from "react";
import { getCategories } from "../server/categories";

export const CategoriesContext = createContext();

export default function CategoriesContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getCategories()
      .then((res) => {
        if (res.categories.data > 0) {
          setCategories(res.categories.data);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, isLoading }}>
      {children}
    </CategoriesContext.Provider>
  );
}
