import React from "react";
import { HeaderMenu } from "../storage/HomeDb";

function Menu() {
  return (
    <ul className="nav">
      {HeaderMenu.map((item) => {
        return (
          <li key={item.id}>
            <a href={item.link} className={item.class} >
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
