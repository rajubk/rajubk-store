"use client";
import { logoutUser } from "@/services/auth/action";
import { revalidateLoggedUser } from "@/services/user/action";
import { ACTION_STATUS } from "@/utils/constants";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

const LogoutButton = () => {
  const [state, logoutAction] = useFormState(logoutUser, {
    status: ACTION_STATUS.NONE,
  });

  useEffect(() => {
    switch (state.status) {
      case ACTION_STATUS.SUCCESS:
        revalidateLoggedUser();
        break;
      case ACTION_STATUS.FAILURE:
        break;
    }
  }, [state]);

  return (
    <form action={logoutAction}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default LogoutButton;
