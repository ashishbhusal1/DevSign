import React from "react";
import Header from "../header/Header";
import Hero from "../home/Hero";
import Story from "../home/Story";
import Gallery from "../home/Gallery";
import Faq from "../home/Faq";
import Order from "../home/Order";
import Footer from "../footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Story />
      <Gallery/>
      <Faq/>
      <Order />
      <Footer />
    </>
  );
}

export default Home;
