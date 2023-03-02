import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import LoginModal from "../login/Login";
import Menu from "../Menu/Menu";
import Footer from "./footer/footer";
import Header from "./header/header";

export function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isHome, setIsHome] = useState(true);
  const { isModal } = useContext(LoginContext);
  const [isCatalogue, setIsCatalogue] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (router.pathname !== "/") {
      setIsHome(false);
    }
    if (router.pathname == "/search") {
      setIsSearch(true);
    }
  }, []);

  return (
    <div id="app">
      <Header
        isCatalogue={isCatalogue}
        setIsCatalogue={setIsCatalogue}
        isSearch={isSearch}
      />
      <main className={isHome ? "" : "main"}>{children}</main>
      <Footer isSearch={isSearch} />
      {isModal && <LoginModal />}
      <Menu isCatalogue={isCatalogue} setIsCatalogue={setIsCatalogue} />
    </div>
  );
}
