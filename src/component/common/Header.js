import React, { useContext } from "react";
import logo from "./../../centime.logo.png";
import { NavLink } from "react-router-dom";
import { LangContext } from "./../App";
import "./common.css";

const activeStyle = { color: "orange" };

function Header() {
  const langContext = useContext(LangContext);

  const handleLangChange = () => {
    if (langContext.langState === "en-us") {
      langContext.langDispatch("fr");
      localStorage.setItem("lang", "fr-ca");
    } else {
      langContext.langDispatch("en");
      localStorage.setItem("lang", "en-us");
    }
  };

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
      <button onClick={handleLangChange} className="lang-change-btn">
        Toggle Language (en/fr)
      </button>
    </header>
  );
}

export default Header;
