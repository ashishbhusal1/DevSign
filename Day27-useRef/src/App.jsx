import React from "react";
import { useRef } from "react";

function App() {
  let Name = useRef();
  let Email = useRef();
  let PhoneNumber = useRef();

  const FormSubmitHandler = () => {
    console.log(Email.current.value);
    console.log(Name.current.value);
    console.log(PhoneNumber.current.value);
  };

  return (
    <>
      <div className="form">
        <input type="email" placeholder="Enter email" ref={Email} />
        <input type="text" placeholder="Enter Name" ref={Name} />
        <input type="number" placeholder="Enter number" ref={PhoneNumber} />
        <button onClick={FormSubmitHandler}>Submit</button>
      </div>
    </>
  );
}

export default App;
