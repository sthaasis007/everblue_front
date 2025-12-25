"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "../../lib/validations/auth.schema";
import { useRouter } from "next/navigation";

import Input from "../ui/input";
import Button from "../ui/button";

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log("Registered user (dummy):", data);

    // Temporary redirect after registration
    router.push("/login");
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Name"
        {...register("name")}
        error={errors.name?.message}
      />

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

      <Input
        label="Confirm Password"
        type="password"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      <Button type="submit">Register</Button>
      <p className="text-center text-sm text-slate-600">
        Already have an account?{" "}
        <a href="/login" className="font-medium text-blue-600 hover:underline">
          Login
        </a>
      </p>

    </form>
  );
}
