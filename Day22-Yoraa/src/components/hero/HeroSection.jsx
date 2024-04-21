import React from "react";
import Content from "./Content";
import Customers from "./Customers";

function HeroSection() {
  return (
    <section class="hero">
      <div class="wrapper herowrap">
        <Content />
        <Customers />
      </div>
    </section>
  );
}

export default HeroSection;
