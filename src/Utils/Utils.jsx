export const mergeProductList = (oldList, newList) => {
  const updatedList = oldList.slice();

  newList.forEach((newItem) => {
    let matchFound = updatedList.find((item) => {
      return item.id === newItem.id;
    });
    if (matchFound) {
      const oldItemDate = new Date(matchFound.updatedOn);
      const newItemDate = new Date(newItem.updatedOn);
      if (oldItemDate - newItemDate < 0) {
        updatedList.pop(matchFound);
        updatedList.push(newItem);
      }
    } else {
      updatedList.push(newItem);
    }
  });
  return updatedList;
};

export const deleteFromArray = (array, matchKey, matchValue) => {
  const index = array.findIndex((item) => {
    return item[matchKey] === matchValue;
  });
  array.splice(index, 1);
  return array;
};

export const escapePressed = (e) => e.key === "Escape";
