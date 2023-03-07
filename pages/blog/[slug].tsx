import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Layout } from "../../components/layout/layout";
import noimage from "../../public/media/noimage.jpg";
import styles from "./blog.module.css";
import ads from "../../public/media/ads.png";
import { Location } from "../../components/utils/location/location";
import { useEffect, useState } from "react";
import { BlogCard } from "../../components/cards/blog/blog";
import { getSingleBlog } from "../../server/blog";

export default function DynamicBlogPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [blogs, setBlogs] = useState<any>([]);
  const [blog, setBlog] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    setIsLoading(true);
    if (router.isReady) {
      getSingleBlog(slug).then((res) => {
        if (res.post == null) {
          router.push("/404");
        }

        setBlogs(res.other_posts);
        setBlog(res.post);

        if (router.locale === "ru") {
          setTitle(res.post.title.ru);
          setDesc(res.post.desc.ru);
        } else if (router.locale === "uz") {
          setTitle(res.post.title.uz);
          setDesc(res.post.desc.uz);
        } else if (router.locale === "en") {
          setTitle(res.post.title.en);
          setDesc(res.post.desc.en);
        }

        setIsLoading(false);
      });
    }
  }, [slug]);

  return (
    <div>
      <Head>
        <title>Nechinchidir Blog</title>
      </Head>
      <Layout>
        <section>
          <div className="container">
            <Location location={"Блог"} />
          </div>
        </section>
        <section>
          <div className={`container ${styles.main_flex}`}>
            <div className={styles.blog_container}>
              <h1 className={styles.title}>{title}</h1>
              <div
                className={styles.text_div}
                dangerouslySetInnerHTML={{ __html: desc }}
              ></div>
              <div className={styles.blog_img}>
                {isLoading ? (
                  <div className={`skeleton ${styles.image_skeleton}`}></div>
                ) : (
                  <Image
                    src={blog.lg_img ? blog.lg_img : noimage}
                    alt={title}
                    className="image"
                    width={1170}
                    height={560}
                  />
                )}
              </div>
            </div>
            <div className={styles.ads_container}>
              <h3 className="section_title">Реклама</h3>
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
          <div className="container section_inner">
            <h3 className="section_title">Другие блоги</h3>
            <div className="blog_container">
              {blogs.length > 0
                ? blogs.map((blog: any, i: number) => {
                    return <BlogCard key={i} blog={blog} />;
                  })
                : null}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
