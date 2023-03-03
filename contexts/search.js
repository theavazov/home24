import { createContext, useState } from "react";

export const SearchContext = createContext();

export default function SearchContextProvider({ children }) {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  const value = {
    results,
    setResults,
    query,
    setQuery,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
