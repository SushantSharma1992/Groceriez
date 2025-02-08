import Fuse from "fuse.js";
import React, { useEffect, useState } from "react";
import BarCodeDialog from "./BarCodeDialog";
import SearchResults from "./SearchResults";

export default function Search({ list, actionOnResult }) {
  const [searchResults, setSearchResults] = useState([]);
  const [searchquery, setSearchquery] = useState("");

  useEffect(() => {
    if (searchquery) {
      findQuery(searchquery);
    }
  }, [searchquery]);

  let fuse;
  const options = {
    includeScore: true,
    keys: ["name", "brand", "barcode", "weight"],
  };
  fuse = new Fuse(list, options);

  const findQuery = (e) => {
    const searchResult = fuse.search(e);
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
          onChange={(e) => {
            setSearchquery(e.target.value);
          }}
          value={searchquery}
        ></input>
        <div className="paddingright-md">
          <BarCodeDialog
            setBarcode={(value) => {
              setSearchquery(value.text);
            }}
          />
        </div>
      </div>
    </div>
  );
}
