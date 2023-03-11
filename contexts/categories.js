import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { getCategories } from "../server/categories";

export const CategoriesContext = createContext();

export default function CategoriesContextProvider({ children }) {
  const { locale } = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getCategories()
      .then((res) => {
        setCategories(res.categories.data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, [locale]);

  return (
    <CategoriesContext.Provider value={{ categories, isLoading }}>
      {children}
    </CategoriesContext.Provider>
  );
}
