import Markdown from "react-markdown";
import { Loading } from "../../components/loading";
import { Layout } from "../../layouts/layout";
import { useRecipeController } from "./use-recipe-controller";

export function Recipe() {
  const { details, isError } = useRecipeController();

  return (
    <Layout>
      {!details && <Loading />}
      {isError && (
        <p className="text-sm text-rose-500">Erro ao carregar receita</p>
      )}
      {details && (
        <Markdown
          components={{
            h2: ({ children }) => (
              <h2 className="mb-4 text-xl font-bold text-app-green">
                {children}
              </h2>
            ),
          }}
          className="text-pretty p-4"
        >
          {details}
        </Markdown>
      )}
    </Layout>
  );
}
