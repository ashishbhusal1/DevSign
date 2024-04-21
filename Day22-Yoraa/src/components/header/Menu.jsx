import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu as MenuItems } from "../../storage/HomeDB";

function Menu() {
  return (
    <>
      <ul class="nav-menu">
        {MenuItems.map((menu) => {
          return (
            <li key={menu.id}>
              <a href={menu.link}>{menu.item}</a>
            </li>
          );
        })}
      </ul>
      <div class="hammenu">
        <GiHamburgerMenu size={35} />
      </div>
    </>
  );
}

export default Menu;
