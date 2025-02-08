import React, { useContext } from "react";
import { ItemContext } from "../../Context/ItemsProvider";
import Button from "../Button";

const ClearCart = () => {
  const { setCartList } = useContext(ItemContext);
  return (
    <Button
      onClick={() => {
        setCartList([]);
      }}
    >
      Clear
    </Button>
  );
};

export default ClearCart;
