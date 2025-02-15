import React, { useContext } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import Button from "./Button";
import { FiSave } from "react-icons/fi";
import useTotal from "../CustomHooks/useTotal";
import useNotification from "../CustomHooks/useNotification";

const AddToHistory = () => {
  const { cartList, setSavedHistory } = useContext(ItemContext);
  const { sendPositiveNotification } = useNotification();
  const total = useTotal();
  return (
    <Button
      type="menu"
      onClick={() => {
        setSavedHistory((prev) => {
          const newEntry = {
            cartId: Date.now(),
            name: `Cart: ${prev.length + 1}, ${
              cartList.length
            } items of [Total: ${total}] on ${new Date()}`,
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
        sendPositiveNotification("Saved Cart to History.")
      }}
    >
      <FiSave />
      Save
    </Button>
  );
};

export default AddToHistory;
