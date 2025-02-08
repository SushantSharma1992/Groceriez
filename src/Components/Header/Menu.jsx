import React, { useRef, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { routerPath } from "../../Routes/Urls";
import AddToHistory from "../AddToHistory";
import ClearCart from "../CartComponents/ClearCart";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const rightPanel = useRef();
  const MenuContainer = ({ children }) => (
    <div className="menuItem flex-row">{children}</div>
  );
  const toggle = () => {
    setOpenMenu((prev) => {
      rightPanel.current.focus();
      return !prev;
    });
  };

  const close = () => {
    setOpenMenu(false);
  };

  return (
    <div className="menu_container">
      <div className="menubutton" onClick={toggle}>
        <CgMenuRight />
      </div>
      <div
        ref={rightPanel}
        tabIndex={0}
        className="right_panel"
        style={{ width: `${openMenu ? "255px" : "0"}` }}
        onKeyDown={(e) => {
          e.key === "Escape" && close();
        }}
        onMouseLeave={close}
        onTouchEnd={close}
      >
        <div className="menubutton" onClick={close}>
          <RxCross1 />
        </div>
        <MenuContainer>
          <AddToHistory />
        </MenuContainer>
        <MenuContainer>
          <ClearCart />
        </MenuContainer>
        <MenuContainer>
          <Link to={routerPath.settings}>
            <AiOutlineSetting />
            <div>Settings</div>
          </Link>
        </MenuContainer>
      </div>
    </div>
  );
};

export default Menu;
