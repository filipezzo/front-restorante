import { Sparkle, TriangleAlert } from "lucide-react";
import { FormEvent } from "react";
import toast from "react-hot-toast";
import { Recipe } from "../../../app/hooks/use-get-recipes-options";
import { useCreateRecipe } from "../../../app/hooks/useCreateRecipe";
import { Button } from "../button";

interface RecipeModalContentProps {
  onSubmit: (e: FormEvent) => void;
  onChangeText: (text: string) => void;
  text: string;
  isPending: boolean;
  data: Recipe[] | undefined;
  onClose: () => void;
}

export function RecipeModalContent({
  onSubmit,
  onChangeText,
  text,
  isPending,
  data,
  onClose,
}: RecipeModalContentProps) {
  const hasData = data && data?.length > 0;

  const { mutateAsync } = useCreateRecipe();

  const handleCreateRecipe = async (recipe: Recipe) => {
    try {
      await mutateAsync(recipe);
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado ao criar receita");
    }
  };

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
  if (hasData) {
    return (
      <ul className="flex flex-col gap-5">
        {data.map((item, index) => (
          <li
            key={index}
            onClick={() => handleCreateRecipe(item)}
            className="group line-clamp-2 flex cursor-pointer flex-col gap-2 rounded-xl bg-gray-800 p-5 transition-opacity hover:opacity-80"
          >
            <strong className="group-hover:text-app-green">{item.title}</strong>
            <p className="text-sm">{item.description}</p>
          </li>
        ))}
      </ul>
    );
  }
}
