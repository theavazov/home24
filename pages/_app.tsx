import "../styles/main.css";
import type { AppProps } from "next/app";
import UserProvider from "../contexts/UserContext";
import CategoriesContextProvider from "../contexts/categories";
import ModalContextProvider from "../contexts/modal";
import SearchContextProvider from "../contexts/search";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ModalContextProvider>
        <SearchContextProvider>
          <CategoriesContextProvider>
            <Component {...pageProps} />
          </CategoriesContextProvider>
        </SearchContextProvider>
      </ModalContextProvider>
    </UserProvider>
  );
}

export default MyApp;

export const endpoint = "https://home24-ndc.vercel.app";
