import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import { RespMenu } from "../../Scripts/Images";

function Header() {
  return (
    <section className="header">
      <div className="wrapper headwrper">
        <Logo />
        <Menu />
        <ul className="resp-nav">
          <img src={RespMenu} />
        </ul>
      </div>
    </section>
  );
}

export default Header;
