import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../../Context/ItemsProvider";
import { routerPath } from "../../Routes/Urls";
import { deleteFromArray } from "../../Utils/Utils";
import Button from "../Button";

const HistoryRow = ({ item }) => {
  const navigate = useNavigate();
  const { savedHistory, setSavedHistory, setCartList } =
    useContext(ItemContext);
  const loadIntoCart = (cart) => {
    setCartList(cart);
  };
  const redirectToCart = (params) => {
    navigate(routerPath.cart);
  };

  return (
    <div key={item.name} className="flex-row">
      <div
        className="margin-auto"
        onClick={() => {
          loadIntoCart(item.snapshot);
          redirectToCart();
        }}
      >
        {item.name}
      </div>
      <div className="delete_button">
        <Button
          onClick={() => {
            const newList = deleteFromArray(
              Array.of(...savedHistory),
              "cartId",
              item.cartId
            );
            setSavedHistory(newList);
          }}
        >
          <MdDeleteOutline />
        </Button>
      </div>
    </div>
  );
};

export default HistoryRow;
