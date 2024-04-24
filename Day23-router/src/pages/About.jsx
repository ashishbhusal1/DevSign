import React, { useState } from "react";

function About() {
  const [accordion, setAccordion] = useState([
    {
      id: 1,
      title: "Accordion 1",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,itaque!",
      active: true,
    },
    {
      id: 2,
      title: "Accordion 2",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,itaque!",
      active: false,
    },
    {
      id: 3,
      title: "Accordion 3",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,itaque!",
      active: false,
    },
  ]);
  const ItemClicked = (item) => {
    setAccordion(
      accordion.map((element) => {
        if (element.id === item.id) element.active = true;
        else element.active = false;
        return element;
      })
    );
  };
  return (
    <>
      <h1>About</h1>
      <ul className="accr">
        {accordion.map((item) => {
          return (
            <li key={item.id}>
              <div className="title" onClick={() => ItemClicked(item)}>
                {item.title}
              </div>
              {item.active && <div className="content">{item.content}</div>}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default About;
