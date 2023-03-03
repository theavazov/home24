import { SectionInfo } from "../../utils/sectioninfo/sectioninfo";
import styles from "./popular.module.css";

export function PopularProductsSection() {
  return (
    <section className="section">
      <div className={`container`}>
        <SectionInfo
          title={"Популярные товары"}
          more={{ text: "Все товары", path: "/popular" }}
        />
      </div>
    </section>
  );
}
