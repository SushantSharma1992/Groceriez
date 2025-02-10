import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import Button from "../Button";

export default function AddQuantityRow({ index, value, onClickRemove }) {
  return (
    <div className="form_row flex-end">
      <span className="resetDefaultWidth direction_column marginright-xl">
        <div>
          <label>quantity:</label>
        </div>
        <input
          className="flex-1 small_width"
          type="number"
          name="quantity"
          defaultValue={value.quantity}
          min="1"
          required
        ></input>
      </span>
      <span className="resetDefaultWidth direction_column marginright-xl">
        <div>
          <label>Price:</label>
        </div>
        <input
          className="flex-1 small_width"
          type="number"
          name="price"
          min="0"
          defaultValue={value.price}
          required
          step=".01"
        ></input>
      </span>

      <span className="resetDefaultWidth direction_column delete_button">
        <Button
          onClick={() => {
            onClickRemove(index);
          }}
        >
          <MdDeleteOutline />
        </Button>
      </span>
    </div>
  );
}
