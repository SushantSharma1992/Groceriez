import React from "react";

export default function SearchResults({ items, onClickAction }) {
  return (
    <>
      {items.map((value) => {
        const item = value.item;
        return (
          <div
            key={item.id}
            className="search_result_item"
            onClick={() => {
              onClickAction(item);
            }}
          >{`${item.brand} ${item.name} ${item.weight} ${item.unit}`}</div>
        );
      })}
    </>
  );
}
