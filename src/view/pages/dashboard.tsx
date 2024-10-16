import { useAuth } from "../../app/hooks/useAuth";
import { Layout } from "../components/layout";

export function Dashboard() {
  const { user } = useAuth();
  return <Layout>Bem vindo, {user?.name}</Layout>;
}
