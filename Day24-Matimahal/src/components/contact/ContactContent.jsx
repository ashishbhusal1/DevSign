import React from "react";
import { Contact, ContactInfo } from "../storage/HomeDb";

function ContactContent() {
  return (
    <section class="gallery-text">
      <div class="wrapper">
        <div class="content">
          {Contact.map((item) => (
            <>
              <p>{item.paragraph[0]}</p>
              <p>{item.paragraph[1]}</p>
            </>
          ))}
        </div>
        <div class="contact-options">
          {ContactInfo.map((item) => (
            <div class={item.class}>
              <h2>{item.heading}</h2>
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactContent;
