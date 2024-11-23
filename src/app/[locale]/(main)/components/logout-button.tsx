"use client";
import Button from "@/app/ui/button";
import Popover from "@/app/ui/popover";
import { logoutUser } from "@/services/auth/action";
import { USER } from "@/services/user/type";
import { ACTION_STATUS } from "@/utils/constants";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import UserProfile from "./user-profile";
import { useTranslations } from "next-intl";

const LogoutButton = ({ fullName }: { fullName: USER["name"] | undefined }) => {
  const t = useTranslations();
  const [state, logoutAction] = useFormState(logoutUser, {
    status: ACTION_STATUS.NONE,
  });
  const { firstname = "", lastname = "" } = fullName || {};
  useEffect(() => {
    switch (state.status) {
      case ACTION_STATUS.SUCCESS:
        break;
      case ACTION_STATUS.FAILURE:
        break;
    }
  }, [state]);

  return (
    <form action={logoutAction}>
      {/* <button type="submit">Logout</button> */}
      <Popover content={`${firstname} ${lastname}`}>
        <div className="flex w-full flex-col">
          <Button variant="error" type="submit">
            {t("logout")}
          </Button>
          <UserProfile />
        </div>
      </Popover>
    </form>
  );
};

export default LogoutButton;
