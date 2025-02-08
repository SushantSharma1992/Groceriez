import React from "react";

export default function Adder(props) {
  return (
      <button type='button' className="add item-button" onClick={props.onClick}>+</button>
  );
}
