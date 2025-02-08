import React from "react";
import Search from "./Search";
import { useContext } from "react";
import { ItemContext } from "../Context/ItemsProvider";

export default function ProductSearch() {
  const { items } = useContext(ItemContext);

  const higlightInList = (item) => {
    const itemDom = document.getElementById(item.id);
    itemDom.scrollIntoView();
    itemDom.click();
    itemDom.focus();

  };

  return (
    <div>
      <Search list={items} actionOnResult={higlightInList} />
    </div>
  );
}
