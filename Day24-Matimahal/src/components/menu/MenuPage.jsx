import React from "react";
import InternalHero from "../reusable/InternalHero";
import MenuItems from "./MenuItems";
import Gallery from "./Gallery";
import { InternalHeroContent } from "../storage/HomeDb";

function MenuPage() {
  return (
    <>
      <InternalHero css={InternalHeroContent[0].class} title={InternalHeroContent[0].title} description={InternalHeroContent[0].description}/>
      <MenuItems/>
      <Gallery/>
    </>
  );
}

export default MenuPage;
