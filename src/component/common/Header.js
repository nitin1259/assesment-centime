import React from "react";
import logo from "./../../logo.svg";
import { NavLink } from "react-router-dom";
import "./common.css";

const activeStyle = { color: "orange" };

function Header() {
  return (
    <header>
      <img alt="centine" src={logo} className="logo-img" />
      <nav>
        <NavLink to="/" activeStyle={activeStyle} exact>
          Home
        </NavLink>{" "}
        |
        <NavLink to="/records" activeStyle={activeStyle}>
          Courses
        </NavLink>{" "}
        |
        <NavLink to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
