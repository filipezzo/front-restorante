import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Discover } from "../../view/pages/discover/discover";
import { Login } from "../../view/pages/login/login";
import { Recipe } from "../../view/pages/recipes/recipe";
import { Recipes } from "../../view/pages/recipes/recipes";
import { Register } from "../../view/pages/register/register";
import { ShoppingList } from "../../view/pages/shopping-list/shopping-list";
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
          <Route index element={<Navigate to="/receitas" />} />
          <Route path="/receitas" element={<Recipes />} />
          <Route path="/receitas/:id" element={<Recipe />} />
          <Route path="/descobrir" element={<Discover />} />
          <Route path="/lista" element={<ShoppingList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
