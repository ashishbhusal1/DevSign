import React from "react";
import InternalHero from "./InternalHero";
import MenuItems from "./MenuItems";
import Gallery from "./Gallery";

function MenuPage() {
  return (
    <>
      <InternalHero />
      <MenuItems/>
      <Gallery/>
    </>
  );
}

export default MenuPage;
