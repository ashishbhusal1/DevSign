import React from "react";
import { LogoImg } from "../../Scripts/Images";

function Logo() {
  return (
    <div class="logo">
      <a href="/index.html">
        <img src={LogoImg} alt="Matimahal" />
      </a>
    </div>
  );
}

export default Logo;
