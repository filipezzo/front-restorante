import { CookingPotIcon, Search, ShoppingCart } from "lucide-react";
import { NavItems } from "../types/nav-item";

export const NavItem: NavItems[] = [
  {
    icon: <CookingPotIcon />,
    label: "Receitas",
    url: "/receitas",
  },
  {
    icon: <Search />,
    label: "Descobrir",
    url: "/descobrir",
  },
  {
    icon: <ShoppingCart />,
    label: "Lista de compras",
    url: "/lista",
  },
];
