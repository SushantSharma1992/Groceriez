import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import SlideForOption from "./SlideForOption";
import SlideMenu from "./SlideMenu";

export default function Item(props) {
  const { editItem, deleteItem } = props;
  return (
    <div className="itemContainer">
      <SlideMenu icon={<FiEdit />} text="Edit" type="left" onClick={editItem} />
      <SlideForOption>{props.children}</SlideForOption>
      <SlideMenu
        icon={<AiOutlineDelete />}
        text="Delete"
        type="right"
        onClick={deleteItem}
      />
    </div>
  );
}
