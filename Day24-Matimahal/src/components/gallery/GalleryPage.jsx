import React from "react";
import { GalleryContent, GalleryImage, InternalHeroContent1 } from "../storage/HomeDb";
import InternalHero from "../reusable/InternalHero";

function GalleryPage() {
  return (
    <>
      <InternalHero css={InternalHeroContent1[0].class} title={InternalHeroContent1[0].title} description={InternalHeroContent1[0].description}/>
      <section class="gallery-text">
        <div class="wrapper">
          <div class="content">
            <p>{GalleryContent[0].title}</p>
            <p>{GalleryContent[0].description}</p>
          </div>
        </div>
      </section>
      <section class="gallery-image">
        <div class="wrapper">
          <ul class="galleryimg">
            {GalleryImage.map((item) => {
              return (
                <li>
                  <img src={item.image} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default GalleryPage;
