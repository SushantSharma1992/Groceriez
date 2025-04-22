import React from "react";

export default function SearchResults({ items, onClickAction }) {
  return (
    <div className="search_results">
      {items.map((value) => {
        const item = value.item;
        return (
          <div
            key={item.id}
            className="search_result_item width-available"
            onClick={() => {
              onClickAction(item);
            }}
          >{`${item.brand} ${item.name} ${item.weight} ${item.unit}`}</div>
        );
      })}
    </div>
  );
}
