import { Link } from "react-router-dom";
import { useRecipe } from "../../app/hooks/useRecipe";
import { Loading } from "./loading";

export function RecentsRecipes() {
  const { data, isPending, isError } = useRecipe();

  if (isError) {
    return null;
  }

  if (isPending) {
    return <Loading />;
  }
  return (
    <div className="flex h-full max-h-[65%] flex-col gap-6 overflow-y-scroll">
      <h3 className="text-center text-gray-400">Suas receitas recentes</h3>
      <ul className="flex w-full flex-col justify-center gap-2 text-gray-400">
        {data.map((item) => (
          <li className="flex w-full justify-center" key={item.id}>
            <Link
              className="truncate text-sm transition-all hover:text-app-green"
              to={`/receitas/${item.id}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
