import axios from "axios";

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
