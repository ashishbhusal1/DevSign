import React from "react";
import FooterMenu from "./FooterMenu";
import { FooterContent } from "../storage/HomeDb";

function Footer() {
  return (
    <section class="footer">
      <div class="wrapper ftrwpr">
        <div class="block-a">
          <div class="title">
            <h2>
              Our restaurant serves healthy food from Indian and Nepalese
              cuisines.
            </h2>
          </div>
          <div class="contact">
            <ul>
              {FooterContent.map((item) => {
                return (
                  <li key={item.id}>
                    <span>
                      <img src={item.image} />
                    </span>
                    <p>{item.title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div class="block-b">
          <FooterMenu />

          <h4>
            © Copyright 2024. All Rights Reserved. Design By{" "}
            <a href="https://astricksoftware.com" target="_blank">
              AStrick Software
            </a>
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Footer;
