import axios from "axios";

export async function getBrands() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/brands`);
  const data = await res.data.brands;
  return data;
}
