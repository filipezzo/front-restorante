import { ChefHat, LogOut } from "lucide-react";
import { useAuth } from "../../app/hooks/useAuth";

export function AsideUser() {
  const { user, signout } = useAuth();
  return (
    <footer className="mt-auto flex items-center gap-2">
      <div className="grid size-10 place-items-center rounded-full border border-gray-400">
        {user && (
          <span className="font-medium text-app-green">
            <ChefHat size={16} />
          </span>
        )}
      </div>
      {user && <h3 className="ml-2 text-gray-400">{user.name}</h3>}
      <button onClick={signout} className="ml-auto transition-all">
        <LogOut className="text-gray-400 hover:text-app-green" />
      </button>
    </footer>
  );
}
