import React, { useContext, useEffect, useState } from "react";
import Item from "../Components/Item";
import ItemQuantityChanger from "../Components/ItemQuantityChanger";
import { ItemContext } from "../Context/ItemsProvider";
import ItemPresentation from "./ItemPresentation";
import useUpdateCart from "../CustomHooks/useUpdateCart";

export default function CartItem(props) {
  const [quantity, setQuantity] = useState(1);
  const { cartList, setCartList } = useContext(ItemContext);
  const index = cartList.findIndex((item) => item.id === props.item.id);
  const { deleteFromCart } = useUpdateCart();

  useEffect(() => {
    const newItems = Array.of(...cartList);
    if (index >= 0) {
      newItems[index] = { ...props.item, purchaseQuantity: quantity };
      setCartList(newItems);
    }

    // eslint-disable-next-line
  }, [quantity]);

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity((prevState) => prevState - 1);
    }
  };

  const deleteItem = () => {
    deleteFromCart(item);
  };

  const editItem = () => {
    props.editFunc(props.item);
  };

  const { item } = props;
  return (
    <Item editItem={editItem} deleteItem={deleteItem}>
      <ItemPresentation item={item} quantity={quantity}>
        <ItemQuantityChanger decrement={decrement} increment={increment} />
      </ItemPresentation>
    </Item>
  );
}
