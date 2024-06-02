import { useCallback, useState } from "react";
import Child from "./components/Child";

// useState, useRef, useEffect, useMemo, useCallback, useContext
// CSS + JavaScript + React

function App() {
  const [Counter, setCounter] = useState(0);
  const [Multiply, setMultiply] = useState(1);

  const myFunction = useCallback(() => {
    // function operation
    // goes here
    return Multiply;
  }, [Multiply]);

  return (
    <>
      <h1>Counter: {Counter}</h1>
      <button onClick={() => setCounter(Counter + 1)}>Counter + 1</button>

      <h1>Multiply: {Multiply}</h1>
      <button onClick={() => setMultiply(Multiply * 2)}>Multiply * 2</button>

      <Child func={myFunction} />
    </>
  );
}

export default App;
