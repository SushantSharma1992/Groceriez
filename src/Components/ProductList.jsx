import React, { useContext, useState } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import { initObject } from "../Utils/Constants";
import AddGroceriesButton from "./AddGroceriesButton";
import AddItemFormPage from "./Addform/AddItemFormPage";
import ProductItem from "./ProductItem";
import ProductSearch from "./ProductSearch";

export default function ProductList() {
  const [show, setShow] = useState(false);
  const [editItem, setEditItem] = useState(initObject);
  const { items } = useContext(ItemContext);

  const editItemFunc = (item) => {
    setShow(true);
    setEditItem(item);
  };

  return (
    <div className="list_container">
      {show && <AddItemFormPage product={editItem} setShow={setShow} />}
      {items.map((value) => {
        return (
          <div key={value.id}>
            <ProductItem item={value} editFunc={editItemFunc} />
          </div>
        );
      })}
      <AddGroceriesButton show={show} showForm={setShow} setEditItem={setEditItem} />
      <ProductSearch />
    </div>
  );
}
