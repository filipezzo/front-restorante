import { Link, useLocation } from "react-router-dom";
import { NavItem } from "../../app/constants/nav-item";
import { cn } from "../../app/utils/cn";

export function AsideNav() {
  const { pathname } = useLocation();

  return (
    <nav className="h-full w-full">
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
    </nav>
  );
}
