import axios from "axios";

export async function getPopularProducts() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/products?type=popular`
  );

  const data = await res.data.products;

  return data;
}

export async function getBestsellerProducts() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/products?type=bestsellers`
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
