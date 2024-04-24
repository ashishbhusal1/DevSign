import React, { useState } from "react";

function Contact() {
  const [accordion, setAccordion] = useState([
    {
      id: 1,
      title: "Accordion1",
      content: "accordion 1",
      active: "true",
    },
    {
      id: 2,
      title: "Accordion2",
      content: "accordion 2",
      active: "false",
    },
    {
      id: 3,
      title: "Accordion3",
      content: "accordion 3",
      active: "false",
    },
  ]);
  const itemClicked = (item) => {
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
      <h1>Contact</h1>
      <ul className="accr">
        {accordion.map((item) => {
          return (
            <li key={item.id}>
              <div className="title" onClick={()=>{itemClicked(item)}}>{item.title}</div>
              {item.active && <div className="content">{item.content}</div>}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Contact;
