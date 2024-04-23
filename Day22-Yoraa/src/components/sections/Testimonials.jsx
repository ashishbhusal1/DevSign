import React from "react";
import { TestimonialsContent } from "../../storage/HomeDB";
import { RiDoubleQuotesL } from "react-icons/ri";

function Testimonials() {
  return (
    <section class="testimonial">
      <div class="wrapper testimonialwrap">
        <div class="heading">
          <h2>We love our Customers and they love us too</h2>
          <span>See all</span>
        </div>
        <div class="content">
          <ul>
            {TestimonialsContent.map((content) => {
              return (
                <li>
                  <div class="logo">
                    <RiDoubleQuotesL
                      style={{ fontSize: "60px", color: "#00cc61" }}
                    />
                  </div>
                  <div class="line"></div>
                  <p>{content.title}</p>
                  <div class="author">
                    <h5>{content.author}</h5>
                    <p>{content.post}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
