import React from "react";
import Header from "../header/Header";
import HeroSection from "../hero/HeroSection";
import Benefits from "../sections/Benefits";
import Products from "../sections/Products";
import AppIntegrations from "../sections/AppIntegrations";
import Posts from "../sections/Posts";
import Testimonials from "../sections/Testimonials";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Benefits />
      <Products />
      <AppIntegrations/>
      <Posts/>
      <Testimonials/>
    </>
  );
}

export default HomePage;
