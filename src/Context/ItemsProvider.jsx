import React, { useEffect, useState } from "react";
import { SavedData, defaultObject } from "../Utils/Constants";

const savedItemsList = JSON.parse(localStorage.getItem(SavedData.GROCERIES));
let savedCartItems = JSON.parse(localStorage.getItem(SavedData.CART_DATA));
let savedHistoryList = JSON.parse(localStorage.getItem(SavedData.HISTORY));
let itemList;

if (!savedCartItems || savedCartItems?.length === 0) {
  savedCartItems = [];
}

if (savedItemsList || savedItemsList?.length > 0) {
  itemList = savedItemsList;
} else {
  itemList = [defaultObject];
}

if (!savedHistoryList || savedHistoryList?.length === 0) {
  savedHistoryList = [];
} 

export const ItemContext = React.createContext();
export default function ItemsProvider({ children }) {
  const [items, setItems] = useState(itemList);
  const [cartList, setCartList] = useState(savedCartItems);
  const [savedHistory, setSavedHistory] = useState(savedHistoryList);

  useEffect(() => {
    localStorage.setItem(SavedData.GROCERIES, JSON.stringify(items));
  }, [items]);
  useEffect(() => {
    localStorage.setItem(SavedData.CART_DATA, JSON.stringify(cartList));
  }, [cartList]);
  useEffect(() => {
    localStorage.setItem(SavedData.HISTORY, JSON.stringify(savedHistory));
  }, [savedHistory]);

  return (
    <ItemContext.Provider
      value={{
        items,
        setItems,
        cartList,
        setCartList,
        savedHistory,
        setSavedHistory,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}
