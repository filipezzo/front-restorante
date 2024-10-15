import { Sparkle, TriangleAlert } from "lucide-react";
import { FormEvent } from "react";
import { RecipeOption } from "../../../app/types/recipe-option";
import { Button } from "../button";

interface RecipeModalContentProps {
  onSubmit: (e: FormEvent) => void;
  onChangeText: (text: string) => void;
  text: string;
  isPending: boolean;
  data: RecipeOption[] | [];
  onSelectRecipe: (recipe: RecipeOption) => void;
}

export function RecipeModalContent({
  onSubmit,
  onChangeText,
  text,
  isPending,
  data,
  onSelectRecipe,
}: RecipeModalContentProps) {
  const hasData = data?.length > 0;
  console.log(data);
  if (hasData) {
    return (
      <ul className="flex flex-col gap-5">
        {data.map((item) => (
          <li
            key={item.id}
            onClick={() => onSelectRecipe(item)}
            className="group line-clamp-2 flex cursor-pointer flex-col gap-2 rounded-xl bg-gray-800 p-5 transition-opacity hover:opacity-80"
          >
            <strong className="group-hover:text-app-green">{item.nome}</strong>
            <p className="text-sm">{item.descricao}</p>
          </li>
        ))}
      </ul>
    );
  }

  if (!hasData) {
    return (
      <>
        <div className="flex items-start gap-5 text-pretty rounded-xl border border-zinc-500 p-4">
          <TriangleAlert />
          <p>
            Para melhores resultados, detalhe somente os ingredientes que você
            possui em sua geladeira.
          </p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <textarea
            disabled={isPending}
            name="text"
            onChange={(e) => onChangeText(e.target.value)}
            placeholder={
              isPending ? "Carregando..." : "Informe seus ingredientes"
            }
            className="max-h-96 min-h-28 w-full rounded-xl border border-zinc-500 bg-transparent p-4 text-gray-300 outline-none placeholder:text-gray-500 focus-within:border-app-green"
          />
          <Button
            disabled={isPending || !text}
            type="submit"
            className="ml-auto"
          >
            <Sparkle />
            {isPending ? "Gerando..." : "Gerar"}
          </Button>
        </form>
      </>
    );
  }
}
