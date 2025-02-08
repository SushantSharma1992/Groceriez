import Fuse from "fuse.js";
import React, { useState } from "react";
import BarCodeDialog from "./BarCodeDialog";
import SearchResults from "./SearchResults";

export default function Search({ list, actionOnResult }) {
  const [searchResults, setSearchResults] = useState([]);
  const [searchquery, setSearchquery] = useState("");
  let fuse;
  const options = {
    includeScore: true,
    keys: ["name", "brand", "barcode", "weight"],
  };
  fuse = new Fuse(list, options);

  const findQuery = (e) => {
    let query = e.target.value;
    const searchResult = fuse.search(query);
    setSearchResults(searchResult);
  };
  return (
    <div className="search_container">
      <SearchResults items={searchResults} onClickAction={actionOnResult} />
      <div className="search_bar_container">
        <input
          className="searchComp"
          type="search"
          placeholder="Search item to add"
          onChange={findQuery}
          value={searchquery}
        ></input>
        <div className="paddingright-md">
          <BarCodeDialog
            setBarcode={(value) => {
              const event = { target: { value: value } };
              setSearchquery(value);
              findQuery(event);
            }}
          />
        </div>
      </div>
    </div>
  );
}
