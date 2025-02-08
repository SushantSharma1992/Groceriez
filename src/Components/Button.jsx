import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <span className="resetDefaultWidth direction_column button_container full-width">
      <button className="center primary_button" onClick={onClick}>
        {children}
      </button>
    </span>
  );
};

export default Button;
