import { createContext, useEffect, useState } from "react";

export const ContentContext = createContext();

export default function ContentContextProvider(props) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storageOrders = JSON.parse(localStorage.getItem("orders"));
    if (storageOrders != null) {
      setOrders(storageOrders);
    }
  }, []);

  const value = { orders, setOrders };

  return (
    <ContentContext.Provider value={value}>
      {props.children}
    </ContentContext.Provider>
  );
}
