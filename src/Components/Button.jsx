import React from "react";

const Button = ({ onClick, children, type, className }) => {
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
        className={`center ${buttonCssClass} ${className || ""}`}
        onClick={onClick}
      >
        {children}
      </button>
    </span>
  );
};

export default Button;
