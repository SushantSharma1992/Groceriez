import React from "react";
import Subtractor from "./Subtractor";
import Adder from "./Adder";

export default function ItemQuantityChanger({ decrement, increment }) {
  return (
    <div className="item-right">
      <Subtractor onClick={decrement} />
      <Adder onClick={increment} />
    </div>
  );
}
