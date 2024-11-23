import Button from "@/app/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";
import { FaTrash } from "react-icons/fa";

const DeleteButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button variant="naked" disabled={pending}>
      <FaTrash color={pending ? "pink" : "red"} />
    </Button>
  );
};

export default DeleteButton;
