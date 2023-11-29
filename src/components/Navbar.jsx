import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-center">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
