import Button from "@/app/ui/button";
import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteButton = () => {
  return (
    <Button variant="naked">
      <FaTrash color="red" />
    </Button>
  );
};

export default DeleteButton;
