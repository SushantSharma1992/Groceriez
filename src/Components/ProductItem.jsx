import React, { useContext } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import ItemPresentation from "../Unit/ItemPresentation";
import Item from "./Item";

export default function ProductItem(props) {
  const { items, setItems } = useContext(ItemContext);
  const { item } = props;

  const deleteItem = () => {
    const newArray = Array.of(...items).filter(
      (item) => item.id !== props.item.id
    );
    setItems(newArray);
  };

  const editItem = () => {
    props.editFunc(props.item);
  };

  return (
    <Item editItem={editItem} deleteItem={deleteItem}>
      <ItemPresentation item={item}>
      </ItemPresentation>
    </Item>
  );
}
