import React from "react";
import { DocumentText, Policy, ToolsLine, UserProfile } from "../scripts/Image";

const DashContent = [
  {
    id: 1,
    image: UserProfile,
    title: "Personal Profile",
    desc: "Update profile, password",
  },
  {
    id: 2,
    image: DocumentText,
    title: "Lease Agreement",
    desc: "Agreement for both parties",
  },
  {
    id: 3,
    image: Policy,
    title: "Renters Insurance",
    desc: "Powered by AppFolio Insurance",
  },
  {
    id: 4,
    image: ToolsLine,
    title: "Maintenance Requests",
    desc: "You can request unit maintenance",
  },
];

function DashBox() {
  return (
    <div className="dash-box">
      <div className="header">
        <h3>Quick Links</h3>
      </div>
      <div className="content">
        <ul className="dllinks _propscrl">
          {DashContent.map((item) => {
            return (
              <li key={item.id}>
                <div className="image">
                  <img src={item.image} />
                </div>
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default DashBox;
