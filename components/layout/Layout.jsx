import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import LoginModal from "../login/Login";
import Menu from "../Menu/Menu";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Layout({ children }) {
  const router = useRouter();
  const [isHome, setIsHome] = useState(true);
  const { isModal } = useContext(LoginContext);
  const [isCatalogue, setIsCatalogue] = useState(false);

  useEffect(() => {
    if (router.pathname !== "/") {
      setIsHome(false);
    }
  }, [router.pathname]);

  return (
    <div id="app">
      <Header isCatalogue={isCatalogue} setIsCatalogue={setIsCatalogue} />
      <main className={isHome ? "" : "main"}>{children}</main>
      <Footer />
      {isModal && <LoginModal />}
      <Menu isCatalogue={isCatalogue} setIsCatalogue={setIsCatalogue} />
    </div>
  );
}
