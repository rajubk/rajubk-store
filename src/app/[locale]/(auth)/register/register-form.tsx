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
    <div className="w-full h-full flex flex-col justify-center items-center">
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-full md:w-1/2 flex flex-col items-center space-y-8 border p-8 rounded-lg bg-white shadow-xl"
      >
        <div className="flex flex-col w-full">
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
            <div className="text-red-500 text-sm">
              {errors.fullName.message}
            </div>
          )}
        </div>
        <div className="flex flex-col w-full">
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
            <div className="text-red-500 text-sm">{errors.user.message}</div>
          )}
        </div>
        <div className="flex flex-col w-full">
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
            <div className="text-red-500 text-sm">
              {errors.password?.message}
            </div>
          )}
        </div>
        <div className="flex flex-col w-full">
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
            <div className="text-red-500 text-sm">
              {errors.confirmPassword?.message}
            </div>
          )}
        </div>
        <div className="flex flex-col w-full">
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
            <div className="text-red-500 text-sm">{errors.email?.message}</div>
          )}
        </div>
        <RegisterButton />
        <span>
          {`${t("have_account")}? `}
          <Link className="text-blue-500 text-sm" href="/login">
            {t("login")}
          </Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterForm;
