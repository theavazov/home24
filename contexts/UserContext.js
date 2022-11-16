import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user"));
    if (storageUser !== null) setUser(storageUser);
  }, []);
  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
