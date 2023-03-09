import axios from "axios";

export async function getFeedbacks() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/feedbacks`);

  const data = await res.data.feedbacks;

  return data;
}
