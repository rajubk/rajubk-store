"use client";
import Button from "@/app/ui/button";
import React from "react";

const AddCartButton = () => {
  return (
    <Button className="w-32" onClick={() => console.log("dummi")}>
      Add to Cart
    </Button>
  );
};

export default AddCartButton;
