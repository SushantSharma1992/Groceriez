import React from "react";

const Header = ({ left, center, right }) => {
  return (
    <div className="header_container flex-row space-between font-xl sticky-top">
      <div className="left_header">{left}</div>
      <div className="center_header flex-1">{center}</div>
      <div className="right_header">{right}</div>
    </div>
  );
};

export default Header;
