import { useContext, useState } from "react";
import { ModalContext } from "../../contexts/modal";
import Menu from "../Menu/Menu";
import { Modal } from "../utils/modal/modal";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

export function Layout({ children }: { children: React.ReactNode }) {
  const { isModal } = useContext(ModalContext);
  const [isCatalogue, setIsCatalogue] = useState(false);

  return (
    <div className="wrapper">
      <Header isCatalogue={isCatalogue} setIsCatalogue={setIsCatalogue} />
      <main>{children}</main>
      <Footer />
      <Menu isCatalogue={isCatalogue} setIsCatalogue={setIsCatalogue} />
      {isModal ? <Modal /> : null}
    </div>
  );
}
