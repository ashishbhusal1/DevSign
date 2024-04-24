import React from "react";
import { HeroContent } from "../storage/HomeDb";

function Hero() {
  return (
    <section className="hero anas2s fadeInDown">
      <div className="wrapper herowrper">
        <div className="heroimage">
          <div className="ihi-content">
            <h1 className="anas3s fadeInUp">
             {HeroContent[0].title}
            </h1>
            <p className="anas4s fadeInUp">
            {HeroContent[0].description}
            </p>
            <a className="btn-primary anas5s fadeInUp" href="/menu.html">
            {HeroContent[0].alt}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
