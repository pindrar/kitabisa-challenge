import axios from "axios";

export const getDomain = (context: any) => {
  const host = context.req.headers.host;
  const protocol =
    context.req.headers["x-forwarded-proto"]
      ? "https"
      : "http";
  return `${protocol}://${host}`
}

export const getDonationsResponse = async (domain:string | undefined) => {
  try {
    const response = await axios.get(`${domain}/campaign.json`);
    return response.data.data
  } catch (error) {
    return error
  }
}
