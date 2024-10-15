import { ChefHat } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../components/button";
import { TextInput } from "../components/text-input";

export function Login() {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.success) {
      toast.success("Cadastro realizado! Faça o login 🎊");
    }
  }, [state]);
  return (
    <div className="grid h-screen w-full place-items-center bg-[url('https://images.unsplash.com/photo-1516684542079-927175cedbb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-no-repeat p-5">
      <form className="relative flex h-[550px] w-full max-w-md flex-col gap-5 rounded-xl border border-zinc-500 bg-zinc-900/95 p-5">
        <header className="absolute -top-8 left-1/2 mx-auto grid size-16 -translate-x-1/2 place-items-center rounded-full bg-app-green">
          <ChefHat />
        </header>
        <h2 className="my-10 text-center text-2xl font-medium">Faça o login</h2>

        <TextInput label="Email" type="email" />
        <TextInput label="Senha" type="password" />

        <Button type="submit" className="flex justify-center text-lg">
          Entrar
        </Button>
        {!state && (
          <Link
            className="text-sm transition-opacity hover:opacity-80"
            to="/registro"
          >
            Não possui uma conta? Registre-se
          </Link>
        )}
      </form>
    </div>
  );
}
