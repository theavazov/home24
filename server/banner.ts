import axios from "axios";

export async function getAds(limit: number) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/banners?type=small&limit=${limit}`
  );

  const data = res.data.banners;

  return data;
}
