import React from "react";
import MenuRowWithIcon from "./MenuRowWithIcon";

const SlideMenu = ({ type, onClick, icon, text }) => {
  return (
    <button className={`${type}Button`} type="button" onClick={onClick}>
      <div className={`flex-row justify_${type}`}>
        <MenuRowWithIcon align="vertical" icon={icon} text={text} />
      </div>
    </button>
  );
};

export default SlideMenu;
