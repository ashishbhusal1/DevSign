import { useState } from "react";

function Home() {
  let [Counter, setCounter] = useState(10); //[statevalue , stateupdatefunction()]

  const inc = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  };
  const dec = () => {
    Counter -= 1;
    setCounter(Counter);
  };
  return (
    <div>
      <button onClick={dec}>-</button>
      <span styl={{ fontSize: "32pt", padding: "0 25px" }}>{Counter}</span>
      <button onClick={inc}>+</button>
    </div>
  );
}

export default Home;
