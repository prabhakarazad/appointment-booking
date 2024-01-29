import React from "react";

import Logo from "../assets/logo.png";
import ArrowDown from "../icons/ArrowDown";
import Link from "../icons/Link";

function Navbar() {
  return (
    <div className="header">
      <img src={Logo} alt="" />
      <div className="header-container">
        <div className="main-menu">
          <h2 className="menu">Menu</h2>
          <ArrowDown />
        </div>
        <h2 className="contact">Contact us</h2>
        <div className="link-btn">
          <Link />
          <h2 className="text-btn">Share Link</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
