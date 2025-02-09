import React, { useContext } from "react";
import { ItemContext } from "../../Context/ItemsProvider";
import Button from "../Button";
import { MdOutlineDeleteOutline } from "react-icons/md";

const ClearCart = () => {
  const { setCartList } = useContext(ItemContext);
  return (
    <Button
      type="menu"
      onClick={() => {
        setCartList([]);
      }}
    >
      <MdOutlineDeleteOutline />
      Clear
    </Button>
  );
};

export default ClearCart;
