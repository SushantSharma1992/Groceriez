import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { MdHistory } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { routerPath } from "../Routes/Urls";
import "../styles/navigation.css";

export default function Home() {
  const navClass = ({ isActive }) =>
    "navItem " + (isActive ? "navItemSelected" : "");

  return (
    <div>
      <div className="navigationPanel">
        <div className="navMenu disable-select">
          <NavLink className={navClass} to={routerPath.cart}>
            <BsCart3 className="navImage" />
            <div>Cart</div>
          </NavLink>
          <NavLink className={navClass} to={routerPath.products}>
            <AiOutlineProduct className="navImage" />
            <div>Products</div>
          </NavLink>
          <NavLink className={navClass} to={routerPath.history}>
            <MdHistory className="navImage" />
            <div>History</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
