import React, { useState } from "react";
import { FaqContent } from "../storage/HomeDb";
import { Right, Up } from "../../Scripts/Images";

function Faq() {
  const [faq, setFaq] = useState(FaqContent);
  const ItemClicked = (item) => {
    setFaq(
      faq.map((element) => {
        if (element.id === item.id) element.active = true;
        else element.active = false;
        return element;
      })
    );
  };
  return (
    <section class="faqs">
      <div class="wrapper faqwraper">
        <h2>Answers to our frequently asked questions.</h2>

        <ul>
          {faq.map((item) => {
            return (
              <li key={item.id}>
                <div class="title" onClick={() => ItemClicked(item)}>
                  <h4>{item.title}</h4>
                  <span>
                    <img src={item.active ? Up : Right} />
                  </span>
                </div>
                {item.active && (
                  <div class="content">
                    <p>{item.description}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Faq;
