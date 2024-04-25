import React from "react";
import { AboutContent } from "../storage/HomeDb";

function AboutCont() {
  return (
    <section class="about-us">
      <div class="wrapper abuswraper">
        <div class="about-content">
          <div class="image">
            <img src="https://matimahalindokhare.com/stocks/img1.jpg" />
          </div>
          <div class="content">
            {AboutContent.map((item) => {
              return <p>{item}</p>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCont;
