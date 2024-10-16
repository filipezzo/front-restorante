import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { User, useUser } from "../hooks/useUser";

interface AuthContextProviderProps {
  signedIn: boolean;
  signin: (token: string) => void;
  signout: () => void;
  user: User | undefined;
}

export const AuthContext = createContext({} as AuthContextProviderProps);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState(() => {
    const storedToken = localStorage.getItem("@restorante:token");
    return !!storedToken;
  });

  const { data, isError, isSuccess, isFetching } = useUser(signedIn);

  const signin = useCallback((token: string) => {
    localStorage.setItem("@restorante:token", token);
    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem("@restorante:token");
    setSignedIn(false);
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error("Sua sessão expirou!");
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        signin,
        signout,
        user: data,
      }}
    >
      {!isFetching && children}
    </AuthContext.Provider>
  );
}
