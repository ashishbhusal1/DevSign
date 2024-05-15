import React from "react";
import {
  Dashboard,
  PropertyDetail,
  Tickets,
  Payments,
  Maintenance,
  Reports,
} from "../scripts/Image";

const NavContent = [
  { id: 1, title: "Dashboard", image: Dashboard, class: "transAe active" },
  { id: 2, title: "Property Detail", image: PropertyDetail, class: "transAe" },
  { id: 3, title: "Tickets", image: Tickets, class: "transAe" },
  { id: 4, title: "Payments", image: Payments, class: "transAe" },
  { id: 5, title: "Maintenance", image: Maintenance, class: "transAe" },
  { id: 6, title: "Reports", image: Reports, class: "transAe" },
];

function NavBar() {
  return (
    <div className="tenant-nav">
      <div className="logo-content">
        <h1>Logo</h1>
      </div>

      <ul className="navigation" id="navsidebar">
        {NavContent.map((menu) => {
          return (
            <li className={menu.class} data-menu="dashboard" key={menu.id}>
              <div className="icon">
                <img src={menu.image} />
              </div>
              <div className="content">
                <p>{menu.title}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavBar;
