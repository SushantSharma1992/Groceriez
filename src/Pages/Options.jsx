import React, { useContext, useEffect, useRef, useState } from "react";
import OptionItem from "../Components/OptionItem";
import {
  cacheDataGroceries,
  cacheDataPathList,
  SavedData,
} from "../Utils/Constants";
import { BsFiletypeJson } from "react-icons/bs";
import { mergeProductList } from "../Utils/Utils";
import { ItemContext } from "../Context/ItemsProvider";

export default function Options() {
  const [downloadUrl, setDownloadUrl] = useState();
  const downloadButton = useRef();
  const importButton = useRef();
  const { items, setItems } = useContext(ItemContext);
  let fileDownloadURL;

  useEffect(() => {
    if (downloadUrl) {
      downloadButton.current.click();
      URL.revokeObjectURL(fileDownloadURL);
    }

    return () => {};
  }, [downloadUrl]);

  const upload = (e) => {
    e.preventDefault();
    importButton.current.click();
  };

  const importData = (evt) => {
    const fileObj = evt.target.files[0]; // We've not allowed multiple files.
    // See https://developer.mozilla.org/en-US/docs/Web/API/FileReader
    const reader = new FileReader();

    // Defining the function here gives it access to the fileObj constant.
    let fileloaded = (e) => {
      // e.target.result is the file's content as text
      // Don't trust the fileContents!
      // Test any assumptions about its contents!
      const fileContents = e.target.result;
      setItems(mergeProductList(items, JSON.parse(fileContents)));
    };

    // The fileloaded event handler is triggered when the read completes
    reader.onload = fileloaded;
    reader.readAsText(fileObj); // read the file
  };
  const downloadJsonData = (e) => {
    e.preventDefault();
    const output = localStorage.getItem(SavedData.GROCERIES);
    const blob = new Blob([output]);
    fileDownloadURL = URL.createObjectURL(blob);
    setDownloadUrl(fileDownloadURL);
  };

  const itemArray = [
    {
      description: "Export Data",
      image: <BsFiletypeJson  className="option_image" />,
      hiddenElement: (
        <a
          className="hidden"
          download={`GroceriesData ${new Date()}.json`}
          href={downloadUrl}
          ref={downloadButton}
        >
          download
        </a>
      ),
      onClick: downloadJsonData,
    },
    {
      description: "Import Data",
      image: <BsFiletypeJson className="option_image" />,
      hiddenElement: (
        <input
          className="hidden"
          type="file"
          multiple={false}
          accept=".json"
          onChange={importData}
          ref={importButton}
        />
      ),
      onClick: upload,
    },
    {
      description: "Delete Data",
      image: <BsFiletypeJson className="option_image" />,
      hiddenElement: <></>,
      onClick: () => {
        setItems([]);
      },
    },
  ];

  return (
    <div className="options_container">
      {itemArray.map((item) => {
        return (
          <OptionItem
            key={item.description}
            description={item.description}
            image={item.image}
            hiddenElement={item.hiddenElement}
            onClick={item.onClick}
          />
        );
      })}
    </div>
  );
}
