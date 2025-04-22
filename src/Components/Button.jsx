import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Button = ({ id, onClick, children, type, className }) => {
  const buttonType = (type) => {
    let cssStyle = "";
    switch (type) {
      case "primary":
        cssStyle =
          "primary_button resetDefaultWidth direction_column full-width";
        break;
      case "secondary":
        break;
      case "menu":
        cssStyle = "menuItem_child";
        break;
      case "cross":
        cssStyle = "clearSearchButton";
        children = <AiOutlineClose />;
        break;

      default:
        cssStyle =
          "primary_button resetDefaultWidth direction_column full-width";
        break;
    }
    return cssStyle;
  };

  const buttonCssClass = buttonType(type);

  return (
    <span className="button_container">
      <button
        id={id}
        className={`center ${buttonCssClass} ${className || ""}`}
        onClick={onClick}
      >
        {children}
      </button>
    </span>
  );
};

export default Button;
