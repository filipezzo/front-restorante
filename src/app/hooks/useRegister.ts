import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";
import { UserRegister } from "../types/register";

async function register(formData: UserRegister) {
  const { data } = await api.post("/users", formData);

  return data;
}

export function useRegister() {
  return useMutation({
    mutationFn: register,
  });
}
