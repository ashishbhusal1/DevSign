import React from "react";
import Logo from "../reusable/Logo";
import { FooterMenu1,FooterMenu2,FooterMenu3,FooterMenu4 } from "../../storage/HomeDB";
import Menu from "./Menu";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <section class="footer">
      <div class="wrapper footerwrap">
        <div class="main">
          <div class="logo-content">
            <Logo />
            <p>
              We built an elegant solution. <br />
              Our team created a fully integrated sales and marketing solution
              for SMBs
            </p>
            <div class="logos">
              <AiFillTwitterCircle size={45}/>
              <FaFacebook size={45}/>
              <FaLinkedin size={45}/>
            </div>
          </div>
          <div class="company">
            <ul>
              {FooterMenu1.map((menu) => (
                <Menu key={menu.id} {...menu}/>)
             )}
            </ul>
          </div>
          <div class="company">
            <ul>
            {FooterMenu2.map((menu) => (
                <Menu key={menu.id} {...menu}/>)
             )}
            </ul>
          </div>
          <div class="company">
            <ul>
            {FooterMenu3.map((menu) => (
                <Menu key={menu.id} {...menu}/>)
             )}
            </ul>
          </div>
          <div class="company">
            <ul>
            {FooterMenu4.map((menu) => (
                <Menu key={menu.id} {...menu}/>)
             )}
            </ul>
          </div>
        </div>
        <div class="line"></div>
        <div class="bottom-content">
          <div class="copyright">
            <span>© Copyright 2022 Yoora, Inc.</span>
          </div>
          <div class="terms">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Cookies</span>
          </div>
          <span class="english">English</span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
