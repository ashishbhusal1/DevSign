import React from "react";
import InternalHero from "./InternalHero";
import AboutCont from "./AboutContent";
import Faq from "../home/Faq";
import Reviews from "../home/Reviews";

function AboutPage() {
  return (
    <>
     <InternalHero />
     <AboutCont />
     <Faq />
     <Reviews/>
    </>
  );
}

export default AboutPage;
