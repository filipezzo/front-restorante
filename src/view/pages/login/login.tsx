import { ChefHat } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import { Loading } from "../../components/loading";
import { TextInput } from "../../components/text-input";
import { useLoginController } from "./use-login-controller";

export function Login() {
  const { errors, handleLoginSubmit, handleSubmit, isPending, register } =
    useLoginController();

  return (
    <div className="grid h-screen w-full place-items-center bg-[url('https://images.unsplash.com/photo-1516684542079-927175cedbb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-no-repeat p-5">
      <form
        onSubmit={handleSubmit(handleLoginSubmit)}
        className="relative flex h-[550px] w-full max-w-md flex-col gap-5 rounded-xl border border-zinc-500 bg-zinc-900/95 p-5"
      >
        <header className="absolute -top-8 left-1/2 mx-auto grid size-16 -translate-x-1/2 place-items-center rounded-full bg-app-green">
          <ChefHat />
        </header>
        <h2 className="my-10 text-center text-2xl font-medium">Faça o login</h2>

        <TextInput
          label="Email"
          type="email"
          {...register("email")}
          error={errors?.email?.message}
        />
        <TextInput
          label="Senha"
          type="password"
          {...register("password")}
          error={errors?.password?.message}
        />

        <Button
          disabled={isPending}
          type="submit"
          className="flex justify-center text-lg"
        >
          {isPending ? <Loading /> : "Entrar"}
        </Button>

        <Link
          className="text-sm transition-opacity hover:opacity-80"
          to="/registro"
        >
          Não possui uma conta? Registre-se
        </Link>
      </form>
    </div>
  );
}
