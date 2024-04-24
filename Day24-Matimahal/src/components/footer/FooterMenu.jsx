import React from "react";
import { FooterMenu } from "../storage/HomeDb";

function Menu() {
  return (
    <ul className="nav">
      {FooterMenu.map((item) => {
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