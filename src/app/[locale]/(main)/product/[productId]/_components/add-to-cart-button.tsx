"use client";
import Button from "@/app/ui/button";
import { useTranslations } from "next-intl";
import React from "react";
import { useFormStatus } from "react-dom";

const AddToCartButton = () => {
  const t = useTranslations();
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-32" disabled={pending}>
      {t("add_to_cart")}
    </Button>
  );
};

export default AddToCartButton;
