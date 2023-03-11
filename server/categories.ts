import axios from "axios";

export async function getCategories() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/categories`);

  const data = await res.data;

  return data;
}

export async function getCategoryBySlug(slug: string | any) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/categories/${slug}`
  );

  const data = await res.data;

  return data;
}
