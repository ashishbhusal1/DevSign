import React from "react";
import {
  Google,
  Attlassian,
  Canon,
  Walmart,
  Amazon,
} from "../../scripts/Images";

const Lists = [Google, Attlassian, Canon, Walmart, Amazon];
function Customers() {
  return (
    <div class="customers">
      <div class="trusted-customers">
        <span>Trusted by 1,000+ customers</span>
      </div>
      <div class="customer-logos">
        <ul>
          {Lists.map((list, index) => {
            return (
              <li key={index}>
                <img src={list} alt="" class="customer-logo-img" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Customers;
