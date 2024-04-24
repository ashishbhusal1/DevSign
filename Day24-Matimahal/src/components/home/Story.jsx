import React from "react";
import { StoryContent, StoryImages } from "../storage/HomeDb";

function Story() {
  return (
    <section class="our-story">
      <div class="wrapper oswrper">
        <div class="image-section">
          <ul>
            {StoryImages.map((image) => {
              return (
                <li key={image.id}>
                  <img src={image.image} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
        <div class="content">
          <h2>{StoryContent[0].title}</h2>
          {StoryContent[0].description.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
          <a href="/about-us.html"> {StoryContent[0].alt}</a>
        </div>
      </div>
    </section>
  );
}

export default Story;
