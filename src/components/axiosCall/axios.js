import axios from "axios";

const setUrls = (url) => {
  const newUrl = "http://localhost:8000/" + url;
  return newUrl;
};

const GET = (url, options = null) => {
  return axios.get(setUrls(url), options);
};

const POST = (url, data = null, options = null) => {
  return axios.post(setUrls(url), data, options);
};

const PUT = (url, data = null, options = null) => {
  return axios.put(setUrls(url), data, options);
};

const DELETE = (url, options = null) => {
  return axios.delete(setUrls(url), options);
};

export const axiosInstance = axios;

export { GET, POST, PUT, DELETE };
