import React from "react";
import { MenuContent } from "../storage/HomeDb";

function MenuItems() {
  return (
    <section class="iMenuitems">
      {MenuContent.map((item) => {
        return (
          <div key={item.key} class={item.class}>
            <div class="menu-items">
              <h1>{item.title}</h1>
              <ul>
                {item.heading.map((heading, index) => (
                  <li key={index}>
                    <h3>{heading}</h3>
                    <p>{item.paragraph[index]}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div class="menu-image">
              <img src={item.image} />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default MenuItems;
