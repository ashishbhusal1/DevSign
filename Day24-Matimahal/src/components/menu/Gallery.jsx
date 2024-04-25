import React from "react";
import { MenuGallery } from "../storage/HomeDb";

function Gallery() {
  return (
    <section class="gallery-image">
      <div class="wrapper">
        <h2>Check More...</h2>
        <ul class="galleryimg">
          {MenuGallery.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Gallery;
