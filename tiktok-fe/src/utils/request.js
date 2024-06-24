import axios from "axios";

const request = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api",
});

export const get = async (endpoint, options = {}) => {
  const reponse = await request.get(endpoint, options);
  return reponse.data;
};

export default request;
