import React, { useContext } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import { FaCheckCircle } from "react-icons/fa";

const useNotification = () => {
  const { notification, setNotification } = useContext(ItemContext);

  const sendPositiveNotification = (text) => {
    setNotification({
      icon: <FaCheckCircle style={{ color: "green" }} />,
      text,
      timeout: 2000,
    });
  };

  return { sendPositiveNotification };
};

export default useNotification;
