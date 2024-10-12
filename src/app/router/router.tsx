import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../../view/pages/dashboard";
import { Discover } from "../../view/pages/discover";
import { Recipes } from "../../view/pages/recipes";
import { ShoppingList } from "../../view/pages/shopping-list";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/receitas" element={<Recipes />} />
        <Route path="/descobrir" element={<Discover />} />
        <Route path="/lista" element={<ShoppingList />} />
      </Routes>
    </BrowserRouter>
  );
}
