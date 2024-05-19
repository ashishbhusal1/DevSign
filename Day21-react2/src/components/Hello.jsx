import React from "react";

function Hello() {
  let fruits = ["apple", "mango"];
  fruits.map((fruit) => {
    console.log(fruit);
  });
  return (
    <>
      <h1>List of fruits</h1>
      {fruits.length === 0 && <p>Basket is empty</p>}

      <ul className="list-group">
        {fruits.map((fruit) => {
          return <li className="list-group-item">{fruits}</li>;
        })}
      </ul>
    </>
  );
}

export default Hello;
