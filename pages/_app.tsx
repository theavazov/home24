import "../styles/main.css";
import type { AppProps } from "next/app";
import UserProvider from "../contexts/UserContext";
import CategoriesContextProvider from "../contexts/categories";
import ModalContextProvider from "../contexts/modal";
import SearchContextProvider from "../contexts/search";
import ContentContextProvider from "../contexts/content";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ContentContextProvider>
        <ModalContextProvider>
          <SearchContextProvider>
            <CategoriesContextProvider>
              <Component {...pageProps} />
            </CategoriesContextProvider>
          </SearchContextProvider>
        </ModalContextProvider>
      </ContentContextProvider>
    </UserProvider>
  );
}

export const endpoint = "https://home24-ndc.vercel.app";
