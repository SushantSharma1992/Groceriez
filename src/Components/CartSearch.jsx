import React from "react";
import { useContext } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import Search from "./Search";

export default function CartSearch() {
  const { items, cartList, setCartList } = useContext(ItemContext);
  const addToCart = (item) => {
    if (
      !cartList.find((value) => {
        return value.id === item.id;
      })
    ) {
      setCartList((pervState) => [...pervState, item]);
    }
  };

  return <Search list={items} actionOnResult={addToCart} />;
}
