import axios from "axios";
import { sleep } from "../helpers/sleep";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@restorante:token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(async (data) => {
  await sleep(500);

  return data;
});
