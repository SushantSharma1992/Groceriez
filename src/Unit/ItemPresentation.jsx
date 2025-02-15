import React from "react";
import ItemDetail from "../Components/ItemDetail";

const ItemPresentation = ({item, quantity, children }) => {
  return (
    <div id={item.id} tabindex="0" className="full-width product_container">
      <div className="title_container">
        <span className="product">{`${item.brand} ${item.name} ${item.weight} ${item.unit}`}</span>
      </div>
      <div className="flex-row full-width">
        <ItemDetail item={item} quantity={quantity} />
        {children}
      </div>
    </div>
  );
};

export default ItemPresentation;
