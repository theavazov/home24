import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import LoginModal from "../login/Login";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Layout({ children }) {
  const { isModal } = useContext(LoginContext);
  return (
    <div id="app">
      <Header />
      <main>{children}</main>
      <Footer />
      {isModal && <LoginModal />}
    </div>
  );
}
