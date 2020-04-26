import React from "react";
import logo from "./../../centime.logo.png";
import { NavLink } from "react-router-dom";
import "./common.css";

const activeStyle = { color: "orange" };

function Header() {
  return (
    <header className="header-class">
      <nav className="nav-link">
        <NavLink to="/" activeStyle={activeStyle} exact>
          <img alt="centine" src={logo} className="logo-img" />
        </NavLink>{" "}
        {/* |
        <NavLink to="/record" activeStyle={activeStyle}>
          New Record
        </NavLink>{" "}
        |
        <NavLink to="/about" activeStyle={activeStyle}>
          About
        </NavLink> */}
      </nav>
    </header>
  );
}

export default Header;
