import React from "react";
import InternalHero from "../reusable/InternalHero";
import AboutCont from "./AboutContent";
import Faq from "../home/Faq";
import Reviews from "../home/Reviews";
import { InternalHeroContent2 } from "../storage/HomeDb";

function AboutPage() {
  return (
    <>
     <InternalHero css={InternalHeroContent2[0].class} title={InternalHeroContent2[0].title} description={InternalHeroContent2[0].description}/>
     <AboutCont />
     <Faq />
     <Reviews/>
    </>
  );
}

export default AboutPage;
