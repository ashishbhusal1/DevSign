import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Pages
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/service">
                Service
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/modal">
            Modal
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" tabIndex="-1" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
  );
}
export default NavBar;
