import { Link, useLocation } from "react-router-dom";
import { NavItem } from "../../app/constants/nav-item";
import { cn } from "../../app/utils/cn";
import { AsideUser } from "./aside-user";
import { Line } from "./line";

export function AsideNav() {
  const { pathname } = useLocation();

  return (
    <nav className="flex h-full w-full flex-col gap-2">
      <ul className="my-4 flex flex-col gap-5">
        {NavItem.map((item) => (
          <li key={item.label}>
            <Link
              className={cn(
                "items-cente flex gap-2 rounded-lg p-2 transition-colors",
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
      <div className="flex h-full max-h-[65%] flex-col gap-2 overflow-y-scroll">
        <h3 className="text-center text-gray-400">Suas receitas recentes</h3>
      </div>
      <Line />
      <AsideUser />
    </nav>
  );
}
