import React from "react";
import { HeroContent } from "../../storage/HomeDB";

function Content() {
  return (
    <div class="hero-content">
      <div class="content">
        <h1>{HeroContent.title}</h1>
        <p>{HeroContent.description}</p>
        <div class="h-email-input">
          <div class="e-input">
            <input type="text" placeholder="Enter your email" />
            <a href="#" class="website-btn btn-green">
              Try for Free
            </a>
          </div>
          <span>Full access .No credit card required.</span>
        </div>
      </div>
    </div>
  );
}

export default Content;
