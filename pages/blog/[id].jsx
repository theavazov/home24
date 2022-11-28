import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Blog } from "..";
import { arrowRight } from "../../components/icons/icons";
import Layout from "../../components/layout/Layout";
import MiddleText from "../../components/middleText/MiddleText";
import blogImage from "../../media/blog-image.jpeg";
import styles from "./Blog.module.css";

export default function DynamicBlogPage() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log(id);
  }, [router]);

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
                <Link href="/" className="page_node_element active">
                  Блог
                </Link>
                {arrowRight}
                <p className="page_node_element">Блог 8 марта</p>
              </div>
              <p className="page_main_title">{id} - blog</p>
            </div>
          </div>
        </section>
        <section>
          <div className={`container ${styles.blog_container}`}>
            <div className={styles.blog_img}>
              <Image src={blogImage} alt="1-blog" />
            </div>
            <div>
              <p className="page_main_title">Подарки для любимых женщин</p>
              <div className={styles.text_div}>
                <p>
                  Международному женскому дню предшествовал Национальный женский
                  день, который отметили в США 28 февраля 1909 года в память о
                  событиях предыдущего, 1908 года, — забастовке работниц
                  текстильной промышленности в Нью-Йорке, которые требовали
                  улучшения условий труда[2].
                </p>
                <p>
                  Ежегодному празднованию Международного женского дня положила
                  начало Вторая Международная конференция социалисток,
                  состоявшаяся в Копенгагене в 1910 году. Праздновать этот день
                  предложила Клара Цеткин[3]. Одной из целей была обозначена
                  борьба за всеобщее избирательное право для женщин. Предложение
                  получило единодушную поддержку более 100 женщин из 17 стран,
                  однако дата празднования зафиксирована не была[2]. До 1914
                  года в разных странах этот день отмечали в различные числа
                  марта[3].
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="titles_div">
              <p className="page_main_title">Другие блоги</p>
            </div>
            <div className="blog_container">
              <Blog />
              <Blog />
              <Blog />
              <Blog />
            </div>
          </div>
        </section>
        <MiddleText />
      </Layout>
    </div>
  );
}
