import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface AuthGuardProps {
  isProtected: boolean;
}

export function AuthGuard({ isProtected }: AuthGuardProps) {
  const { signedIn } = useAuth();
  if (!signedIn && isProtected) {
    return <Navigate to="/login" replace />;
  }

  if (signedIn && !isProtected) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
