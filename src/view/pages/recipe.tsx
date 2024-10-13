import { useParams } from "react-router-dom";
import { Layout } from "../components/layout";

export function Recipe() {
  const { id } = useParams();
  if (!id) {
    return null;
  }
  return (
    <Layout>
      <strong>{id}</strong>
    </Layout>
  );
}
