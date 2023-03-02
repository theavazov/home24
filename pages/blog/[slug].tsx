import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Blog } from "..";
import { arrowRight } from "../../components/icons/icons";
import { Layout } from "../../components/layout/layout";
import blogImage from "../../media/blog-image.jpeg";
import styles from "./blog.module.css";
import ads from "../../media/ads.png";

export default function DynamicBlogPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Head>
        <title>Nechinchidir Blog</title>
      </Head>
      <Layout>
        <section>
          <div className="container">
            <div className="main_text_content">
              <div className="page_node">
                <Link href="/" className="page_node_element active">
                  Главная
                </Link>
                {arrowRight}
                <Link href="/blog" className="page_node_element active">
                  Блог
                </Link>
                {arrowRight}
                <p className="page_node_element">Блог 8 марта</p>
              </div>
              <p className="page_main_title">Блог</p>
            </div>
          </div>
        </section>
        <section>
          <div className={`${styles.main_flex} container`}>
            <div className={styles.blog_container}>
              <div>
                <p className="category_title">
                  Любовь к семье и верность университету - по наследству: два
                  поколения преподавателей Грехнёвых в ННГУ
                </p>
                <div className={styles.text_div}>
                  <p>
                    Ежегодному празднованию Международного женского дня положила
                    начало Вторая Международная конференция социалисток,
                    состоявшаяся в Копенгагене в 1910 году. Праздновать этот
                    день предложила Клара Цеткин[3]. Одной из целей была
                    обозначена борьба за всеобщее избирательное право для
                    женщин.Предложение получило единодушную поддержку более 100
                    женщин из 17 стран, однако дата празднования зафиксирована
                    не была[2]. До 1914 года в разных странах этот день отмечали
                    в различные числа марта[3].
                  </p>
                  <p>
                    Ежегодному празднованию Международного женского дня положила
                    начало Вторая Международная конференция социалисток,
                    состоявшаяся в Копенгагене в 1910 году. Праздновать этот
                    день предложила Клара Цеткин[3]. Одной из целей была
                    обозначена борьба за всеобщее избирательное право для
                    женщин. Предложение получило единодушную поддержку более 100
                    женщин из 17 стран, однако дата празднования зафиксирована
                    не была[2]. До 1914 года в разных странах этот день отмечали
                    в различные числа марта[3].
                  </p>
                </div>
              </div>
              <div className={styles.blog_img}>
                <Image src={blogImage} alt="1-blog" />
              </div>
              <div>
                <p className={styles.blog_title}>
                  Теперь вернемся к теме подарка.
                </p>
                <div className={styles.text_div}>
                  <p>
                    Международному женскому дню предшествовал Национальный
                    женский день, который отметили в США 28 февраля 1909 года в
                    память о событиях предыдущего, 1908 года, — забастовке
                    работниц текстильной промышленности в Нью-Йорке, которые
                    требовали улучшения условий труда[2].
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.ads_container}>
              <p className="category_title">Реклама</p>
              <div className={styles.ads_div}>
                <div className={styles.ads}>
                  <Image src={ads} alt="advertising" />
                </div>
                <div className={styles.ads}>
                  <Image src={ads} alt="advertising" />
                </div>
                <div className={styles.ads}>
                  <Image src={ads} alt="advertising" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="titles_div">
              <p className="category_title">Другие блоги</p>
            </div>
            <div className="blog_container"></div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
