import React from "react";
import Rates from "./Rates";
import RatesList from "./RatesList";

export default function ItemDetail({ item, quantity }) {
  return (
    <div id={item.id} className="item-left">
      {quantity === undefined ? (
        <RatesList item={item} />
      ) : (
        <Rates item={item} quantity={quantity} />
      )}
    </div>
  );
}
