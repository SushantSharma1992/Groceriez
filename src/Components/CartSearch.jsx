import React from "react";
import { useContext } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import Search from "./Search";
import useUpdateCart from "../CustomHooks/useUpdateCart";

export default function CartSearch() {
  const { items } = useContext(ItemContext);
  const { addToCart } = useUpdateCart();
  return <Search list={items} actionOnResult={addToCart} />;
}
