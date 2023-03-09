import axios from "axios";

export async function getPopularProducts(limit: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/products?type=popular&limit=${limit}`
  );

  const data = await res.data.products;

  return data;
}

export async function getBestsellerProducts(limit: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/products?type=bestsellers&limit=${limit}`
  );

  const data = await res.data.products;

  return data;
}

export async function getProductsOfTheDay() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/products?type=products_of_the_day`
  );

  const data = await res.data.products;

  return data;
}
