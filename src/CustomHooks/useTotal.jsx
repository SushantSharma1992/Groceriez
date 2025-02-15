import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import { getPrice } from "../Utils/ItemUtils";

const useTotal = () => {
  const { cartList } = useContext(ItemContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let newTotal = 0;
    cartList.forEach((item) => {
      newTotal += item.purchaseQuantity * getPrice(item, item.purchaseQuantity);
    });
    setTotal(newTotal);
  }, [cartList]);
  return total;
};

export default useTotal;
