import { LogOut } from "lucide-react";
import { getInitials } from "../../app/helpers/get-initials";
import { useAuth } from "../../app/hooks/useAuth";

export function AsideUser() {
  const { user, signout } = useAuth();
  return (
    <footer className="mt-auto flex items-center justify-between gap-2">
      <div className="grid size-10 place-items-center rounded-full border">
        <span className="font-medium text-app-green">
          {user && getInitials(user.name)}
        </span>
      </div>
      <button onClick={signout} className="transition-all">
        <LogOut className="hover:text-app-green" />
      </button>
    </footer>
  );
}
