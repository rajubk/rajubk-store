"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import LoginButton from "./login-button";
import { useFormState } from "react-dom";
import { loginUser, redirectHome } from "@/services/auth/action";

const LoginForm = () => {
  const [state, loginAction] = useFormState(loginUser, null);
  const { register } = useForm({ defaultValues: { user: "", password: "" } });

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

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        action={loginAction}
        noValidate
        className="w-full md:w-1/2 flex flex-col items-center space-y-8 border p-8 rounded-lg"
      >
        <input
          type="text"
          placeholder="User name"
          {...register("user", { minLength: 2, required: true })}
          className="w-full border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { minLength: 2, required: true })}
          className="w-full border p-2"
        />
        <LoginButton />
      </form>
    </div>
  );
};

export default LoginForm;
