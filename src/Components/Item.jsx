import React from "react";
import Delete from "./Delete";
import SlideForOption from "./SlideForOption";

export default function Item(props) {
  const { editItem, deleteItem} = props
  return (
    <div className="itemContainer">
      <button type="button" className="leftButton" onClick={editItem}>
        Edit
      </button>
      <SlideForOption>{props.children}</SlideForOption>
      <Delete deleteFunc={deleteItem} />
    </div>
  );
}
