import React from "react";

import Hero from "../home/Hero";
import Story from "../home/Story";
import Gallery from "../home/Gallery";
import Faq from "../home/Faq";
import Reviews from "../home/Reviews";

function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Gallery />
      <Reviews /> 
      <Faq />
    </>
  );
}

export default Home;
