"use client";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { redirectHome, registerUser } from "@/services/auth/action";
import { useNotificationConext } from "@/providers/notification-provider";
import RegisterButton from "./register-button";
import { ACTION_STATUS } from "@/utils/constants";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface FormField {
  fullName: string;
  user: string;
  password: string;
  confirmPassword: string;
  email: string;
}

const RegisterForm = () => {
  const t = useTranslations();
  const [state, registerAction] = useFormState(registerUser, null);
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<FormField>({
    defaultValues: {
      fullName: "",
      user: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
  });
  const formRef = useRef<HTMLFormElement>(null);
  const { setNotification } = useNotificationConext();

  useEffect(() => {
    const { status = "none" } = state || {};
    switch (status) {
      case ACTION_STATUS.SUCCESS:
        setNotification({
          message: "Successfully registered the user!!!",
          severity: "success",
          variant: "filled",
        });
        redirectHome();
        break;
      case ACTION_STATUS.FAILURE:
        setNotification({
          message: "Failed to register user!!!",
          severity: "error",
          variant: "filled",
        });
      case ACTION_STATUS.USER_EXISTS:
        setNotification({
          message: "User already exists!!!",
          severity: "error",
          variant: "filled",
        });
        break;
    }
  }, [state, setNotification]);

  const onSubmit = () => {
    registerAction(new FormData(formRef.current!));
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex w-full flex-col items-center space-y-8 rounded-lg border bg-white p-8 shadow-xl md:w-1/2"
      >
        <div className="flex w-full flex-col">
          <input
            placeholder="Full name"
            {...register("fullName", {
              minLength: {
                value: 4,
                message: "minimum 4 character",
              },
              maxLength: {
                value: 20,
                message: "maximum 20 character",
              },
              required: "User name is required",
            })}
            className="w-full border p-2"
          />
          {errors.fullName && (
            <div className="text-sm text-red-500">
              {errors.fullName.message}
            </div>
          )}
        </div>
        <div className="flex w-full flex-col">
          <input
            placeholder="User name"
            {...register("user", {
              minLength: {
                value: 4,
                message: "minimum 4 character",
              },
              maxLength: {
                value: 10,
                message: "maximum 10 character",
              },
              required: "User name is required",
            })}
            className="w-full border p-2"
          />
          {errors.user && (
            <div className="text-sm text-red-500">{errors.user.message}</div>
          )}
        </div>
        <div className="flex w-full flex-col">
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              minLength: {
                value: 4,
                message: "Minimum 4 characters",
              },
              required: "Password is required",
            })}
            className="w-full border p-2"
          />
          {errors.password && (
            <div className="text-sm text-red-500">
              {errors.password?.message}
            </div>
          )}
        </div>
        <div className="flex w-full flex-col">
          <input
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword", {
              minLength: {
                value: 4,
                message: "Minimum 4 characters",
              },
              required: "Password is required",
              validate: (val: string) =>
                getValues("password") === val || "Password do not match",
            })}
            className="w-full border p-2"
          />
          {errors.confirmPassword && (
            <div className="text-sm text-red-500">
              {errors.confirmPassword?.message}
            </div>
          )}
        </div>
        <div className="flex w-full flex-col">
          <input
            placeholder="Email"
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
              required: "User name is required",
            })}
            className="w-full border p-2"
          />
          {errors.email && (
            <div className="text-sm text-red-500">{errors.email?.message}</div>
          )}
        </div>
        <RegisterButton />
        <span>
          {`${t("have_account")}? `}
          <Link className="text-sm text-blue-500" href="/login">
            {t("login")}
          </Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterForm;
