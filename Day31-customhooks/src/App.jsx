// import React, { useMemo, useState } from "react";
// import useCounter from "./hooks/useCOunter";
// import useStorage from "./hooks/useStorage";
// import { Cities as myCities } from "./data/Cities";

// function App() {
//   const [Counter, Increment, Decrement] = useCounter();
//   const [GetItem, SetItem, RemoveItem] = useStorage();
//   let obj = {
//     id: 1,
//     name: "Jogh",
//     age: 25,
//   };
//   SetItem("Person1", obj);

//   let item = GetItem("Person1");
//   console.log(item);

//   const [counter, setCounter] = useState(0);
//   const [Cities] = useState(myCities);

//   let CapitalCity = useMemo(() => {
//     return Cities.find((city) =>  {
//       return city.name == "Kathmandu" ? true : false;
//     });
//   }, [Cities]);
//   return (
//     <>
//       <h1>Counter: {Counter}</h1>

//       <button onClick={Increment}>Increase</button>
//       <button onClick={Decrement}>Decrease</button>

//       <h1>Counter:{Counter}</h1>
//       {Counter == CapitalCity.id && (
//         <h1>
//           {CapitalCity.name} is in Counter #{Counter}
//         </h1>
//       )}
//       <button onClick={Increment}>Increase</button>
//       <button onClick={Decrement}>Decrease</button>
//     </>
//   );
// }

// export default App;

import { useState, useMemo } from "react";
import { Cities as myCities } from "./data/Cities";

function App() {
  const [Counter, setCounter] = useState(0);
  const [Cities] = useState(myCities);

  const Increment = () => {
    setCounter((Counter) => (Counter += 1));
  };

  const Decrement = () => {
    setCounter((Counter) => (Counter -= 1));
  };

  let CapitalCity = useMemo(() => {
    return Cities.find((city) => {
      console.log("render");
      return city.name == "Kathmandu" ? true : false;
    });
  }, [Cities]);

  return (
    <>
      <h1>Counter: {Counter}</h1>
      {Counter == CapitalCity.id && (
        <h1>
          {CapitalCity.name} is in Counter #{Counter}
        </h1>
      )}
      <button onClick={Decrement}>Decrease</button>
      <button onClick={Increment}>Increase</button>
    </>
  );
}

export default App;
