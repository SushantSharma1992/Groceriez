import React, { useContext, useEffect, useRef, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ItemContext } from "../../Context/ItemsProvider";
import { initObject, metricChartArray } from "../../Utils/Constants";
import BarCodeDialog from "../BarCodeDialog";
import AddQuantityRow from "./AddQuantityRow";
import FormRow from "./FormRow";
import Button from "../Button";
import { escapePressed } from "../../Utils/Utils";
import useNotification from "../../CustomHooks/useNotification";

export default function AddItemFormPage(props) {
  const { product, setShow } = props;
  const { items, setItems, setCartList } = useContext(ItemContext);
  const [item, setItem] = useState(product);
  const [quantityArray, setQuantityArray] = useState([]);
  const [barcode, setBarcode] = useState(item.barcode);
  const { sendPositiveNotification } = useNotification();

  const submitButtonRef = useRef("");

  const addProductForm = document.getElementById("myForm");

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
      if (index !== -1) {
        newArray[index] = newItem;
      }
      return newArray;
    });
  };
  const updateInCart = (newItem) => {
    setCartList((prevState) => {
      const newArray = Array.of(...prevState);
      const index = newArray.findIndex((value) => value.id === newItem.id);
      if (index !== -1) {
        newArray[index] = { ...newArray[index], ...newItem };
      }
      return newArray;
    });
  };

  const resetValues = () => {
    addProductForm.reset();
    document.getElementById("brand").focus();
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
        sendPositiveNotification("Item Updated.");
      } else {
        newItem = {
          id: Date.now(),
          purchaseQuantity: 0,
          createdOn: new Date(),
          updateOn: new Date(),
          ...data,
        };
        setItems((prevState) => [...prevState, newItem]);
        sendPositiveNotification("Item Added.");
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

  const close = () => {
    resetValues();
    setShow(false);
  };

  const saveShortcut = (e) => {
    if (e.ctrlKey && e.which === 83) {
      e.preventDefault();
      document.getElementById("formSubmitButton-id").click();
      return false;
    }
  };

  return (
    <div className="add__item_container">
      <div className="closeButton right_corner" onClick={close}>
        <IoCloseCircleOutline />
      </div>
      <div className="add__Item">
        <form
          onSubmit={onSubmit}
          id="myForm"
          onKeyDown={(e) => {
            escapePressed(e) && close();
            saveShortcut(e);
          }}
        >
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
                  id="brand"
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
                    step=".01"
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
            <div className="form_row">
              <Button
                type="primary"
                onClick={() => {
                  setQuantityArray((prevState) => {
                    return [
                      ...prevState,
                      <AddQuantityRow
                        key={quantityArray.length}
                        index={quantityArray.length}
                        value={{
                          quantity: 3 * quantityArray.length,
                          price: "",
                        }}
                        onClickRemove={deleteQuantityRow}
                      />,
                    ];
                  });
                }}
              >
                +
              </Button>
            </div>
            <div className="form_row">
              <Button id="formSubmitButton-id">Save</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
