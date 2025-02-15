import React, { useState } from "react";
import MenuRowWithIcon from "./MenuRowWithIcon";

const DropdownMenu = ({ menuOptions, children }) => {
  const [hideMenu, setHideMenu] = useState(true);
  const toggle = () => {
    setHideMenu((prev) => !prev);
  };

  return (
    <div className="dropdownMenuContainer">
      <div onClick={toggle}>{children}</div>
      <div
        id="menuOptions-id"
        className={`menuOptions ${hideMenu ? "hide" : ""} flex-column center`}
      >
        {menuOptions.map((item, index) => (
          <div key={`menuItem-${index} -id`} id={`menuItem-${index} -id`} onClick={item.onClick}>
            <MenuRowWithIcon
              align="horizontal"
              icon={item.icon}
              text={item.component}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
