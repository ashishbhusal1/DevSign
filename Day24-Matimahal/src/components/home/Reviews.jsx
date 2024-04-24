import React from "react";

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
                <li>
                  <div class="image">
                    <img src="./images/users/user1.png" />
                  </div>
                  <div class="comment">
                    <h4>December 2023</h4>
                    <p>
                      長崎県で一番人気なお店だった、ナン又カレーも美味しいかったし、スタッフも優しかった、又行きたい。
                    </p>
                  </div>
                </li>

                <li>
                  <div class="image">
                    <img src="./images/users/user2.png" />
                  </div>
                  <div class="comment">
                    <h4>February 2023</h4>
                    <p>
                      Pretty busy around lunchtime. But the food is excellent.
                      Indian people owning the place and cooking. So that's a
                      good sign always. Waitress spoke japanese and English.
                    </p>
                  </div>
                </li>
              </ul>
            </li>

            <li style="margin-top: 112px;margin-left: 50px;">
              <div class="header">
                <p>Google Reviews</p>
                <h3>Testimonials</h3>
              </div>

              <ul class="review-content">
                <li>
                  <div class="image">
                    <img src="./images/users/user3.png" />
                  </div>
                  <div class="comment">
                    <h4>August 2023</h4>
                    <p>
                      What delicious and inexpensive food! It’s super close to
                      the Peace park too. It’s a great choice.
                    </p>
                  </div>
                </li>

                <li>
                  <div class="image">
                    <img src="./images/users/user4.png" />
                  </div>
                  <div class="comment">
                    <h4>September 2023</h4>
                    <p>
                      カレーとナンが美味しいです。ランチに比べディナーは高い方。ビリヤニは美味しくないです。オーナー変わって味落ちた。日本語は上手じゃないのではっきり繰り返して意思を伝えることが大事
                    </p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="revcontent">
          <h2>We value our customers' feedback!</h2>
          <p>
            Read what our customers have to say about our food, service, and
            atmosphere. Your opinion matters to us and helps us improve our
            restaurant.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
