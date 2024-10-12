import { ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <ChefHat className="hidden size-9 md:block" />
      <h2 className="text-lg font-semibold md:text-2xl">
        Resto<span className="text-app-green">Rante</span>
      </h2>
    </Link>
  );
}
