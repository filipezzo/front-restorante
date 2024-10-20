import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { useAuth } from "../../../app/hooks/useAuth";
import { useLogin } from "../../../app/hooks/useLogin";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginSchema = z.infer<typeof schema>;
export function useLoginController() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(schema),
  });
  const { mutateAsync, isPending } = useLogin();
  const { signin } = useAuth();
  const handleLoginSubmit = async (data: LoginSchema) => {
    try {
      const { token } = await mutateAsync(data);
      signin(token);
    } catch (e) {
      if (e instanceof AxiosError) {
        toast.error(e.response?.data.message);
      } else {
        toast.error("erro ao realizar login");
      }
    }
  };

  return {
    register,
    handleSubmit,
    handleLoginSubmit,
    isPending,
    errors,
  };
}
