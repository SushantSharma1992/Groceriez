import React from "react";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";
import { routerPath } from "../Routes/Urls";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { MdHistory } from "react-icons/md";
import "../styles/navigation.css";

export default function Home() {
  return (
    <div>
      <div className="navigationPanel">
        <div className="navMenu disable-select">
          <Link className="navItem" to={routerPath.cart}>
            <BsCart3 className="navImage" />
            <div>Cart</div>
          </Link>
          <Link className="navItem" to={routerPath.products}>
            <AiOutlineProduct className="navImage" />
            <div>Products</div>
          </Link>
          <Link className="navItem" to={routerPath.history}>
            <MdHistory className="navImage"/>
            <div>History</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
