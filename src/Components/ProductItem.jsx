import React, { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import { ItemContext } from "../Context/ItemsProvider";
import ItemPresentation from "../Unit/ItemPresentation";
import DropdownMenu from "./DropdownMenu";
import useUpdateCart from "../CustomHooks/useUpdateCart";
import useNotification from "../CustomHooks/useNotification";

export default function ProductItem(props) {
  const { items, setItems } = useContext(ItemContext);
  const { item } = props;

  const { addToCart } = useUpdateCart();
  const { sendPositiveNotification } = useNotification();

  const deleteItem = () => {
    const newArray = Array.of(...items).filter(
      (item) => item.id !== props.item.id
    );
    setItems(newArray);
    sendPositiveNotification(`${item.name} deleted.`);
  };

  const editItem = () => {
    props.editFunc(props.item);
  };

  const menuItems = [
    {
      name: "Add to cart",
      icon: <MdOutlineAddShoppingCart />,
      component: <div>Add to cart</div>,
      onClick: () => {
        addToCart(item);
      },
    },
    {
      name: "Edit",
      icon: <RiEditBoxLine />,
      component: <div>Edit</div>,
      onClick: editItem,
    },
    {
      name: "Delete",
      icon: <AiOutlineDelete style={{ color: "red" }} />,
      component: <div style={{ color: "red" }}>Delete</div>,
      onClick: deleteItem,
    },
  ];

  return (
    <DropdownMenu menuOptions={menuItems}>
      <ItemPresentation item={item}></ItemPresentation>
    </DropdownMenu>
  );
}
