import React from "react";
import { HeaderMenu } from "../storage/HomeDb";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <ul className="nav">
      {HeaderMenu.map((item) => {
        return (
          <li key={item.id}>
            <NavLink to={item.link} className={item.class} >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
