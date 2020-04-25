import React from "react";
import logo from "./../../logo.svg";
import { Link, NavLink } from "react-router-dom";

const activeStyle = { color: "orange" };

function Header() {
  return (
    <header>
      <img
        alt="centine"
        src={logo}
        style={{
          height: "50px",
          width: "auto",
          verticalAlign: "bottom",
        }}
      />
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
