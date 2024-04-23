import React from "react";

function Menu({id,title}) {
  return (
      <>
        <li key={id}>{title}</li>
      </>
  );
}

export default Menu;
