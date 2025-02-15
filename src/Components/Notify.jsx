import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import { IoCloseCircleOutline } from "react-icons/io5";

const Notify = () => {
  const { notification } = useContext(ItemContext);
  const [notificationContent, setNotificationContent] = useState(notification);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setNotificationContent(notification);
    setShowNotification(true);
  }, [notification]);

  useEffect(() => {
    if (showNotification && notificationContent.timeout) {
      setTimeout(() => {
        setShowNotification(false);
      }, notificationContent.timeout);
    }
  }, [showNotification]);

  const Close = () => {
    setShowNotification(false);
  };

  return (
    notificationContent.text && (
      <div
        className={`notification_container flex-row center ${
          showNotification ? "showNotification" : ""
        }`}
      >
        <div></div>
        <div className="flex-row center">
          <div className="center icon-container padding-md">
            {notificationContent.icon}
          </div>
          <div className="text-container">{notificationContent.text}</div>
        </div>
        <div className="flex-row center font-xl padding-md" onClick={Close}>
          <IoCloseCircleOutline />
        </div>
      </div>
    )
  );
};

export default Notify;
