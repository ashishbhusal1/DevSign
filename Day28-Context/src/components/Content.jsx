import React from "react";
import { Payments, Pending, User1, User2, User3 } from "../scripts/Image";

const ContentData = [
  {
    id: 1,
    image: User1,
    title1: "Max Whitehead",
    title2: "created a new task #tasks547851",
    image2: Pending,
    desc: "March 20,6:32 AM",
  },
  {
    id: 2,
    image: User2,
    title1: "Logan Mollie",
    title2: "closed a ticket #TIC2440",
    image2: Pending,
    desc: "April 20,7:32 PM",
  },
  {
    id: 3,
    image: Payments,
    title1: "Calicadoo Warren",
    title2: "paid the rent outstanding payment",
    image2: Pending,
    desc: "August 16,12:00 PM",
  },
  {
    id: 4,
    image: User3,
    title1: "Max Whitehead",
    title2: "created a new task #tasks547851",
    image2: Pending,
    desc: " March 20,6:32 AM",
  },
];

function Content() {
  return (
    <div className="content">
      <ul className="dvc-activity _propscrl">
        {ContentData.map((item) => {
          return (
            <li key={item.id}>
              <div className="icon">
                <img src={item.image} />
              </div>

              <div className="content">
                <p>
                  <strong>{item.title1}</strong> {item.title2}
                </p>
                <span>
                  <img src={Pending} alt="datetime" /> {item.desc}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Content;
