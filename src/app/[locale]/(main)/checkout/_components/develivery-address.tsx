import { USER } from "@/services/user/type";
import React from "react";

const DeliveryAddress = ({ user }: { user: USER }) => {
  const {
    address: { city, street, zipcode },
    name: { firstname, lastname },
  } = user;
  return (
    <div className="flex h-full w-full flex-col space-y-4">
      <div className="flex w-full flex-col rounded-lg bg-white p-4 shadow-lg">
        <div className="text-lg font-bold">{`Delivering to ${firstname} ${lastname}`}</div>
        <div className="text-slate-500">{street}</div>
        <div className="text-slate-500">{city}</div>
        <div className="text-slate-500">{zipcode}</div>
      </div>
      <div className="flex w-full flex-col rounded-lg bg-white p-4 shadow-lg">
        <div className="text-lg font-bold">Payment method</div>
        <form className=""></form>
      </div>
    </div>
  );
};

export default DeliveryAddress;
