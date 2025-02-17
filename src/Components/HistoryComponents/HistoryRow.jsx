import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../../Context/ItemsProvider";
import { routerPath } from "../../Routes/Urls";
import { deleteFromArray } from "../../Utils/Utils";
import Button from "../Button";
import useNotification from "../../CustomHooks/useNotification";

const HistoryRow = ({ item }) => {
  const navigate = useNavigate();
  const { savedHistory, setSavedHistory, setCartList } =
    useContext(ItemContext);
  const { sendPositiveNotification } = useNotification();
  const loadIntoCart = (cart) => {
    setCartList(cart);
  };
  const redirectToCart = (params) => {
    navigate(routerPath.cart);
  };

  return (
    <div key={item.name} className="flex-row padding-md margin-auto">
      <div
        className="paddingright-md"
        onClick={() => {
          loadIntoCart(item.snapshot);
          sendPositiveNotification("Loaded in Cart.");
          redirectToCart();
        }}
      >
        {item.name}
      </div>
      <div className="delete_button margin-auto">
        <Button
          onClick={() => {
            const newList = deleteFromArray(
              savedHistory,
              "cartId",
              item.cartId
            );
            setSavedHistory(newList);
            sendPositiveNotification("Successfully Deleted.");
          }}
        >
          <MdDeleteOutline />
        </Button>
      </div>
    </div>
  );
};

export default HistoryRow;
