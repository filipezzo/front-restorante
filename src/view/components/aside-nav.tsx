import { Link, useLocation } from "react-router-dom";
import { NavItem } from "../../app/constants/nav-item";
import { cn } from "../../app/utils/cn";
import { AsideUser } from "./aside-user";
import { Line } from "./line";
import { RecentsRecipes } from "./recents-recipes";

export function AsideNav() {
  const { pathname } = useLocation();

  return (
    <nav className="flex h-full w-full flex-col gap-2">
      <ul className="my-4 flex flex-col gap-5">
        {NavItem.map((item) => (
          <li key={item.label}>
            <Link
              className={cn(
                "flex items-center gap-2 rounded-lg p-2 transition-colors",
                pathname === item.url && "bg-app-green",
              )}
              to={item.url}
            >
              {item.icon}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Line />
      <RecentsRecipes />
      <Line />
      <AsideUser />
    </nav>
  );
}
