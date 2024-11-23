"use client";
import Button from "@/app/ui/button";
import Popover from "@/app/ui/popover";
import { logoutUser } from "@/services/auth/action";
import { USER } from "@/services/user/type";
import { ACTION_STATUS } from "@/utils/constants";
import React, { useEffect, useMemo } from "react";
import { useFormState } from "react-dom";
import UserProfile from "./user-profile";

const LogoutButton = ({ fullName }: { fullName: USER["name"] }) => {
  const [state, logoutAction] = useFormState(logoutUser, {
    status: ACTION_STATUS.NONE,
  });
  const { firstname = "", lastname = "" } = fullName;
  useEffect(() => {
    switch (state.status) {
      case ACTION_STATUS.SUCCESS:
        break;
      case ACTION_STATUS.FAILURE:
        break;
    }
  }, [state]);

  const popoverContent = useMemo(
    () => (
      <div className="w-full flex flex-col">
        <Button variant="error" type="submit">
          Logout
        </Button>
        <UserProfile />
      </div>
    ),
    []
  );

  return (
    <form action={logoutAction}>
      {/* <button type="submit">Logout</button> */}
      <Popover content={popoverContent}>{`${firstname} ${lastname}`}</Popover>
    </form>
  );
};

export default LogoutButton;
