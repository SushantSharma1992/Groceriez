import React, { useContext } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import useNotification from "./useNotification";

const useUpdateCart = () => {
  const { cartList, setCartList } = useContext(ItemContext);
  const { sendPositiveNotification } = useNotification();

  const addToCart = (item) => {
    if (
      !cartList.find((value) => {
        return value.id === item.id;
      })
    ) {
      setCartList((pervState) => [...pervState, item]);
      sendPositiveNotification("Successfully Added to Cart.");
    }else{
      sendPositiveNotification("Already in Cart.");
    }
  };

  const clearCart = () => {
    setCartList([]);
    sendPositiveNotification("Cart Cleared.");
  };
  const deleteFromCart = (item) => {
    const newArray = Array.of(...cartList).filter(
      (value) => value.id !== item.id
    );
    setCartList(newArray);
    sendPositiveNotification(`${item.name} deleted.`);
  };

  return { addToCart, clearCart, deleteFromCart };
};

export default useUpdateCart;
