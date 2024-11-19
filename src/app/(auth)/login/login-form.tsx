"use client";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import LoginButton from "./login-button";
import { useFormState } from "react-dom";
import { loginUser, redirectHome } from "@/services/auth/action";

interface FormField {
  user: string;
  password: string;
}

const LoginForm = () => {
  const [state, loginAction] = useFormState(loginUser, null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormField>({ defaultValues: { user: "", password: "" } });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const { status = "none" } = state || {};
    switch (status) {
      case "success":
        redirectHome();
        break;
      case "failure":
        alert("failed");
        break;
    }
  }, [state]);

  const onSubmit = () => {
    loginAction(new FormData(formRef.current!));
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-full md:w-1/2 flex flex-col items-center space-y-8 border p-8 rounded-lg"
      >
        <div className="flex flex-col w-full">
          <input
            {...register("user", {
              minLength: {
                value: 4,
                message: "minimum 4 character",
              },
              maxLength: {
                value: 10,
                message: "maximum 10 character",
              },
              required: "user name is required",
            })}
            className="w-full border p-2"
          />
          {errors.user && (
            <div className="text-red-500 text-sm">{errors.user.message}</div>
          )}
        </div>
        <div className="flex flex-col w-full">
          <input
            type="password"
            placeholder="Password"
            {...register("password", { minLength: 4, required: true })}
            className="w-full border p-2"
          />
          {errors.password && (
            <div className="text-red-500 text-sm">
              {errors.password?.message}
            </div>
          )}
        </div>
        <LoginButton />
      </form>
    </div>
  );
};

export default LoginForm;
