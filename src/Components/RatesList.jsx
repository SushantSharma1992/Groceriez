import React from "react";
import { getMiliUnit } from "../Utils/ItemUtils";

export default function RatesList({ item }) {
  const miliUnit = getMiliUnit(item);

  return (
    <>
      <div className="grid_3">
        <div>Quantity</div>
        <div>Price</div>
        <div>Value</div>
        {item?.rates.map((rate, index) => {
          return (
            <>
              <span key={index} className="price">{rate.quantity} </span>
              <span key={`${index}-1`} className="price">{rate.price} </span>
              <span key={`${index}-2`} className="price">{Math.floor(miliUnit / rate.price)}</span>
            </>
          );
        })}
      </div>
    </>
  );
}
