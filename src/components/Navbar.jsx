import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import JsElectricalLogo from "../assets/J's-Electrical-Logo.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img className="navlogo" src={JsElectricalLogo} alt="logo" />
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
