import React, { useContext, useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ItemContext } from "../../Context/ItemsProvider";
import { initObject, metricChartArray } from "../../Utils/Constants";
import BarCodeDialog from "../BarCodeDialog";
import AddQuantityRow from "./AddQuantityRow";
import FormRow from "./FormRow";

export default function AddItemFormPage(props) {
  const { product, setShow } = props;
  const { items, setItems, setCartList } = useContext(ItemContext);
  const [item, setItem] = useState(product);
  const [quantityArray, setQuantityArray] = useState([]);
  const [barcode, setBarcode] = useState(item.barcode);

  const deleteQuantityRow = (index) => {
    setQuantityArray((prev) => {
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  };

  useEffect(() => {
    const ratesList = item.rates.map((value, index) => {
      return (
        <AddQuantityRow
          key={index}
          index={index}
          value={value}
          onClickRemove={deleteQuantityRow}
        />
      );
    });
    setQuantityArray(ratesList);
  }, [item]);

  const updateInProducts = (newItem) => {
    setItems((prevState) => {
      const newArray = Array.of(...prevState);
      const index = newArray.findIndex((value) => value.id === newItem.id);
      if (index > 0) {
        newArray[index] = newItem;
      }
      return newArray;
    });
  };
  const updateInCart = (newItem) => {
    setCartList((prevState) => {
      const newArray = Array.of(...prevState);
      const index = newArray.findIndex((value) => value.id === newItem.id);
      if (index > 0) {
        newArray[index] = { ...newArray[index], ...newItem };
      }
      return newArray;
    });
  };

  const resetValues = () => {
    document.getElementById("myForm").reset();
    setItem(initObject);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let newItem;
    if (e.target[1].value) {
      const data = getObject(e.target);
      if (item.id) {
        newItem = { ...item, ...data, updateOn: new Date() };
        updateInProducts(newItem);
        updateInCart(newItem);
      } else {
        const prevId = items[items.length - 1]?.id || 0;
        newItem = {
          id: prevId + 1,
          purchaseQuantity: 0,
          createdOn: new Date(),
          updateOn: new Date(),
          ...data,
        };
        setItems((prevState) => [...prevState, newItem]);
      }
    }
    resetValues();
  };

  const onChangeBarcode = (e) => {
    setBarcode(e.target.value);
  };

  const getObject = (target) => {
    const element = [];
    const rates = [];
    let quantity = "";
    for (let index = 0; index < target.length; index++) {
      if (target[index].type !== "button" && target[index].type !== "submit") {
        if (target[index].name === "quantity") {
          quantity = [target[index].value];
        } else if (target[index].name === "price") {
          if (target[index].value) {
            rates.push({ quantity, [target[index].name]: target[index].value });
          }
        } else {
          element.push({ [target[index].name]: target[index].value });
        }
      }
    }
    element.push({ rates });
    return Object.assign(...element);
  };

  return (
    <div className="add__item_container">
      <div
        className="closeButton"
        onClick={() => {
          resetValues();
          setShow(false);
        }}
      >
        <IoCloseCircleOutline />
      </div>
      <div className="add__Item">
        <form onSubmit={onSubmit} id="myForm">
          <div className="form_items">
            <FormRow
              label={"Barcode"}
              input={
                <>
                  <input
                    className="flex-1 marginright-xl"
                    type="text"
                    name="barcode"
                    onChange={onChangeBarcode}
                    value={barcode}
                  ></input>
                  <BarCodeDialog setBarcode={setBarcode} />
                </>
              }
            />
            <FormRow
              label={"Brand:"}
              input={
                <input
                  className="flex-1"
                  type="text"
                  name="brand"
                  defaultValue={item.brand}
                  autoFocus
                ></input>
              }
            />
            <FormRow
              label={"Name:"}
              input={
                <input
                  className="flex-1"
                  type="text"
                  name="name"
                  defaultValue={item.name}
                  required
                ></input>
              }
            />
            <FormRow
              label={"Weight:"}
              input={
                <>
                  <input
                    className="flex-1 marginright-xl"
                    type="number"
                    name="weight"
                    defaultValue={item.weight}
                    min={1}
                  ></input>

                  <select id="unit" name="unit" defaultValue={item.unit}>
                    {metricChartArray.map((key) => {
                      const unit = key[0];
                      return (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      );
                    })}
                  </select>
                </>
              }
            />

            {quantityArray}
            <button
              className="form_row button_margin_top"
              type="button"
              onClick={() => {
                setQuantityArray((prevState) => {
                  return [
                    ...prevState,
                    <AddQuantityRow
                      key={quantityArray.length}
                      index={quantityArray.length}
                      value={{ quantity: 3 * quantityArray.length, price: "" }}
                      onClickRemove={deleteQuantityRow}
                    />,
                  ];
                });
              }}
            >
              +
            </button>
            <button className="form_row button_margin_top">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
