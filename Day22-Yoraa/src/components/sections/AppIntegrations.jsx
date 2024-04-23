import React from "react";
import {
  Asana,
  Box,
  Circle,
  Flower,
  Hubspot,
  Intercom,
  Meet,
  Teams,
  Zendex,
  Zoom
} from './../../scripts/Images';

function AppIntegrations() {
  return (
    <section class="app">
      <div class="wrapper appwrap">
        <div class="content">
          <h2>Over 300+ integrations</h2>
          <p>
            Expand the capabilities of Yoora with hundreds of apps and
            integrations
          </p>
        </div>
        <div class="apps">
          <ul>
            <li>
              <img src={Circle} alt="" />
            </li>
            <li class="big">
              <img src={Hubspot} alt="" />
            </li>
            <li class="big">
              <img src={Zoom}alt="" />
            </li>
            <li>
              <img src={Meet} alt="" />
            </li>
            <li class="big">
              <img src={Zendex} alt="" />
            </li>
          </ul>
          <ul>
            <li class="big1">
              <img src={Intercom} alt="" />
            </li>
            <li>
              <img src={Box} alt="" />
            </li>
            <li>
              <img src={Flower} alt="" />
            </li>
            <li class="big1">
              <img src={Asana} alt="" />
            </li>
            <li>
              <img src={Teams} alt="" />
            </li>
          </ul>
        </div>
        <div class="rest-text">
          <p>See all apps and extensions</p>
        </div>
      </div>
    </section>
  );
}

export default AppIntegrations;
