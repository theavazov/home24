import axios from "axios";

export async function getBlogs() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/posts`);
  const data = await res.data.posts;
  return data;
}

export async function getSingleBlog(slug: any) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/posts/${slug}`
  );
  const data = await res.data;
  return data;
}
