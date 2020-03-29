import React from "react";
import "./style.scss";
import Logo from "./../../assets/icon.png";
const Header = props => (
  <header data-test="headerComponent">
    <div className="wrap">
      <div className="logo">
        <img data-test="logoImg" src={Logo} alt="logo" />
      </div>
    </div>
  </header>
);
export default Header;
