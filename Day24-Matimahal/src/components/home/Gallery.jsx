import React from "react";
import { HomeGallery } from "../storage/HomeDb";

function Gallery() {
  const largerImages = HomeGallery.filter((item) => item.class === "larger");
  const smallerImages = HomeGallery.filter((item) => item.class === "smaller");
  return (
    <section class="home-gallery">
      <div class="wrapper homwrper">
        <h2>Gallery</h2>
        <p>
          We came from Nepal to Japan with a dream of starting a small business
          and offering our customers a unique food experience. That's how
          Matimahal Restaurant & Bar was born. Thanks to our amazing team of
          staff, chefs, and members, we have enjoyed serving our wonderful
          customers and we will always work and serve with passion.
        </p>
        <a href="/gallery.html">Gallery —</a>

        <ul className="larger">
          {largerImages.map((image) => (
            <li key={image.id}>
              <img src={image.image} alt={`Gallery image ${image.id}`} />
            </li>
          ))}
        </ul>

        {/* Render smaller images */}
        <ul className="smaller">
          {smallerImages.map((image) => (
            <li key={image.id}>
              <img src={image.image} alt={`Gallery image ${image.id}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Gallery;
