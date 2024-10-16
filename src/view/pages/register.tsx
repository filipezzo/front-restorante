import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { ChefHat } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useAuth } from "../../app/hooks/useAuth";
import { useRegister } from "../../app/hooks/useRegister";
import { cn } from "../../app/utils/cn";
import { Button } from "../components/button";
import { Loading } from "../components/loading";
import { TextInput } from "../components/text-input";

const registerFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "O nome não pode estar vazio.")
    .min(3, "Seu nome deve conter no mínimo 3 caracteres."),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const { mutateAsync, isPending } = useRegister();

  const { signin } = useAuth();

  const handleRegisterSubmit = async (data: RegisterFormSchema) => {
    try {
      const { token } = await mutateAsync(data);
      signin(token);
    } catch (e) {
      if (e instanceof AxiosError) {
        toast.error(e.response?.data.message);
      } else {
        toast.error("erro ao realizar registro");
      }
    }
  };
  return (
    <div className="grid h-screen w-full place-items-center bg-[url('https://images.unsplash.com/photo-1516684542079-927175cedbb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-no-repeat p-5">
      <form
        onSubmit={handleSubmit(handleRegisterSubmit)}
        className={cn(
          "relative flex h-[550px] w-full max-w-md flex-col gap-4 rounded-xl border border-zinc-500 bg-zinc-900/95 p-5",
        )}
      >
        <header className="absolute -top-8 left-1/2 mx-auto grid size-16 -translate-x-1/2 place-items-center rounded-full bg-app-green">
          <ChefHat />
        </header>
        <h2 className="my-5 text-center text-2xl font-medium">
          Crie sua conta
        </h2>
        <TextInput
          {...register("name")}
          error={errors.name?.message}
          label="Nome"
        />
        <TextInput
          {...register("email")}
          error={errors.email?.message}
          label="Email"
          type="email"
        />
        <TextInput
          {...register("password")}
          error={errors.password?.message}
          label="Senha"
          type="password"
        />

        <Button
          disabled={isPending}
          type="submit"
          className="flex justify-center text-lg"
        >
          {isPending ? <Loading /> : "Criar conta"}
        </Button>
        <Link
          className="rounded-full text-sm transition-opacity hover:opacity-80"
          to="/login"
        >
          Já possui uma conta? Faça login
        </Link>
      </form>
    </div>
  );
}
