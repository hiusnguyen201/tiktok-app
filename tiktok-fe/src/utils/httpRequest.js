import axios from "axios";

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (endpoint, options = {}) => {
  const reponse = await httpRequest.get(endpoint, options);
  return reponse.data;
};

export default httpRequest;
