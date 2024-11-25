import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

interface UserLogin {
  email: string;
  password: string;
}

async function login(formData: UserLogin) {
  const { data } = await api.post("/users/login", formData);
  return data;
}

export function useLogin() {
  return useMutation({
    mutationFn: login,
  });
}
