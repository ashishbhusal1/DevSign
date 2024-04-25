import React from "react";
import { Rev1, Rev2, RevContent } from "../storage/HomeDb";

function Reviews() {
  return (
    <section class="reviews">
      <div class="wrapper revwraper">
        <div class="review">
          <ul>
            <li>
              <div class="header">
                <p>Google Reviews</p>
                <h3>Testimonials</h3>
              </div>

              <ul class="review-content">
                {Rev1.map((item) => (
                  <li key={item.id}>
                    <div class="image">
                      <img src={item.image} />
                    </div>
                    <div class="comment">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>

            <li style={{ marginTop: "112px", marginLeft: "50px" }}>
              <div class="header">
                <p>Google Reviews</p>
                <h3>Testimonials</h3>
              </div>

              <ul class="review-content">
                {Rev2.map((item) => (
                  <li key={item.id}>
                    <div class="image">
                      <img src={item.image} />
                    </div>
                    <div class="comment">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <div class="revcontent">
          <h2>{RevContent[0].title}</h2>
          <p>{RevContent[0].description}</p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
