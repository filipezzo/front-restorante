import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export type User = {
  id: string;
  name: string;
  email: string;
};

async function getUser() {
  const { data } = await api.get<User>("/users/me");
  return data;
}

export function useUser(signedIn: boolean) {
  return useQuery({
    queryKey: ["user", "me"],
    queryFn: getUser,
    enabled: signedIn,
    staleTime: Infinity,
  });
}
