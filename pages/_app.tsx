import "../styles/main.css";
import type { AppProps } from "next/app";
import LoginModalProvider from "../contexts/LoginContext";
import UserProvider from "../contexts/UserContext";
import CategoriesContextProvider from "../contexts/categories";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <LoginModalProvider>
        <CategoriesContextProvider>
          <Component {...pageProps} />
        </CategoriesContextProvider>
      </LoginModalProvider>
    </UserProvider>
  );
}

export default MyApp;

export const endpoint = "https://home24-ndc.vercel.app";
