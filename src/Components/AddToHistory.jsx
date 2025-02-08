import React, { useContext } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import Button from "./Button";
import useTotal from "./CartComponents/useTotal";

const AddToHistory = () => {
  const { cartList, setSavedHistory } = useContext(ItemContext);
  const total = useTotal();
  return (
    <Button
      onClick={() => {
        setSavedHistory((prev) => {
          const newEntry = {
            cartId: Date.now(),
            name: `Cart: ${prev.length + 1}, ${cartList.length} items of [Total: ${total}] on ${new Date()}`,
            snapshot: cartList,
          };
          const index = prev.findIndex(
            (cart) => cart.cartId === cartList.cartId
          );
          if (index < 0) {
            return [...prev, newEntry];
          } else {
            const newArray = Array.of(...prev);
            newArray[index] = newEntry;
            return newArray;
          }
        });
      }}
    >
      Save
    </Button>
  );
};

export default AddToHistory;
