import axios from "axios";

export async function getPopularProducts() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/products?type=popular`
  );

  const data = await res.data.products;

  return data;
}
