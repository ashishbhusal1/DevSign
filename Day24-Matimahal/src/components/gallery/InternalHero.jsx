import React from "react";
import { InternalHeroContent1 } from "../storage/HomeDb";

function InternalHero() {
  return (
    <section class="internal-hero anas2s fadeInDown">
      <div class="wrapper herowrper">
        <div class="iheroimage meta-gallery">
          <div class="ihi-content internalherader">
            <h1 class="anas3s fadeInUp">{InternalHeroContent1[0].title}</h1>
            <p class="anas4s fadeInUp">{InternalHeroContent1[0].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InternalHero;
