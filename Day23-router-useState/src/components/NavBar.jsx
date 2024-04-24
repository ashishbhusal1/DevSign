import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <ul style={{ display: "flex", gap: "25px" }}>
      <li>
        <NavLink to="/" reloadDocument>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/service">Service</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
