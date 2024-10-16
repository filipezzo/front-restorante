import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../../view/pages/dashboard";
import { Discover } from "../../view/pages/discover";
import { Login } from "../../view/pages/login";
import { Recipe } from "../../view/pages/recipe";
import { Recipes } from "../../view/pages/recipes";
import { Register } from "../../view/pages/register";
import { ShoppingList } from "../../view/pages/shopping-list";
import { AuthGuard } from "./auth-guard";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isProtected={false} />}>
          <Route path="/registro" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<AuthGuard isProtected />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/receitas" element={<Recipes />} />
          <Route path="/receitas/:id" element={<Recipe />} />
          <Route path="/descobrir" element={<Discover />} />
          <Route path="/lista" element={<ShoppingList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
