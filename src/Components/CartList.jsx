import React, { useContext, useState } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import CartItem from "../Unit/CartItem";
import { initObject } from "../Utils/Constants";
import AddItemFormPage from "./Addform/AddItemFormPage";
import CartSearch from "./CartSearch";
import Total from "./Total";

export default function CartList() {
  const [show, setShow] = useState(false);
  const [editItem, setEditItem] = useState(initObject);
  const { cartList } = useContext(ItemContext);

  const editItemFunc = (item) => {
    setShow(true);
    setEditItem(item);
  };

  return (
    <div className="list_container">
      {show && <AddItemFormPage product={editItem} setShow={setShow} />}
      <Total />
      {cartList.map((value) => {
        return (
          <div key={value.id}>
            <CartItem item={value} editFunc={editItemFunc} />
          </div>
        );
      })}
      <CartSearch />
    </div>
  );
}
