import React from "react";
import Header from "../header/Header";
import HeroSection from "../hero/HeroSection";
import Benefits from "../sections/Benefits";
import Products from "../sections/Products";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Benefits />
      <Products />
    </>
  );
}

export default HomePage;
