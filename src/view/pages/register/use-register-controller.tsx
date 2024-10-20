import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { useAuth } from "../../../app/hooks/useAuth";
import { useRegister } from "../../../app/hooks/useRegister";

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

export function useRegisterController() {
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

  return {
    isPending,
    handleRegisterSubmit,
    register,
    handleSubmit,
    errors,
  };
}
