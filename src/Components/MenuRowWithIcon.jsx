import React from "react";

const MenuRowWithIcon = ({ align, icon, text }) => {
  let alignment = "flex-column";
  let iconPadding = "padding-sm";
  let containerPadding = "padding-md";
  if (align === "horizontal") {
    alignment = "flex-row";
    iconPadding = "padding-md";
    containerPadding = "";
  }

  return (
    <div className={`${alignment} align_center ${containerPadding}`}>
      <span className={`${iconPadding} font-lg`}>{icon}</span>
      {text}
    </div>
  );
};

export default MenuRowWithIcon;
