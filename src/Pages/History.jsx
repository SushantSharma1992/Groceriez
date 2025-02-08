import React from "react";
import { ItemContext } from "../Context/ItemsProvider";
import { useContext } from "react";

import HistoryRow from "../Components/HistoryComponents/HistoryRow";

const History = () => {
  const { savedHistory } = useContext(ItemContext);
  return (
    <div className="form_items list_container history_container">
      {savedHistory.map((item) => (
        <HistoryRow key={item.name} item={item} />
      ))}
    </div>
  );
};

export default History;
