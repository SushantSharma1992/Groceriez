import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import useUpdateCart from "../../CustomHooks/useUpdateCart";
import Button from "../Button";

const ClearCart = () => {
  const { clearCart } = useUpdateCart();
  return (
    <Button type="menu" onClick={clearCart}>
      <MdOutlineDeleteOutline />
      Clear
    </Button>
  );
};

export default ClearCart;
