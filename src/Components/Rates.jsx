import React from "react";
import { getPrice } from "../Utils/ItemUtils";

export default function Rates({ item, quantity }) {
  return (
    <div className="center space_between">
      <span>
        <div>{`Price   : ${getPrice(item, quantity)}`}</div>
        <div>Quantity: {quantity}</div>
        <span className="price">Rs. {(getPrice(item, quantity) * quantity).toFixed(2)}</span>
      </span>
    </div>
  );
}
