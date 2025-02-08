import React from "react";
import { initObject } from "../Utils/Constants";

export default function AddGroceriesButton(props) {
  return (
    <button
      type="button"
      className="addGroceries_button"
      onClick={() => {
        props.showForm(!props.show);
        props.setEditItem(initObject)
      }}
    >
      <div>+</div>
    </button>
  );
}
