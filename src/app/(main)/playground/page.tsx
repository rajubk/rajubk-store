"use client";
import Card from "@/app/ui/card";
import Popover from "@/app/ui/popover";
import React from "react";

const Page = () => {
  return (
    <div>
      <Popover content={<Card>Dummi</Card>}>test</Popover>
    </div>
  );
};

export default Page;
