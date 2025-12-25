"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "../../lib/validations/auth.schema";
import { useRouter } from "next/navigation";

import Input from "../ui/input";
import Button from "../ui/button";

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

    const onSubmit = (data: LoginSchema) => {
    console.log("Login data (dummy):", data);

    // Temporary redirect after login
    router.push("/auth/dashboard");
    };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />

      <Input
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password?.message}
      />

      <Button type="submit">Login</Button>
      <p className="text-center text-sm text-slate-600">
        Don’t have an account?{" "}
        <a href="/register" className="font-medium text-blue-600 hover:underline">
            Register
        </a>
        </p>

    </form>
  );
}
