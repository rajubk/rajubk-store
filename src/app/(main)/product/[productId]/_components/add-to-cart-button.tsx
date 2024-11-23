"use client";
import Button from "@/app/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

const AddToCartButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-32" disabled={pending}>
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
