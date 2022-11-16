import { createContext, useState } from "react";

export const LoginContext = createContext();

export default function LoginModalProvider({ children }) {
  const [isModal, setIsModal] = useState(false);
  const value = { isModal, setIsModal };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
