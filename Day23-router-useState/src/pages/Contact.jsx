import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Contact() {
  const [password, showPassword] = useState(true);
  return (
    <>
      <div
        className="logi"
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <input
          type="text"
          style={{ padding: "10px" }}
          placeholder="Input Email"
        />
        <input
          type="password"
          style={{ padding: "10px" }}
          placeholder="Input Password"
        />

        {Visibility ? <FaEye size={32} /> : <FaEyeSlash size={32} />}
      </div>
    </>
  );
}

export default Contact;

const Classwork = () => {
  const [value, valuefn] = useState(true);

  const displaypw = (value) => {
    if (value == true) {
    }
  };
};

// return (
//   <div
//     className="logi"
//     style={{ display: "flex", flexDirection: "column", gap: "5px" }}
//   >
//     <input type="text" style={{ padding: "10px" }} placeholder="Input Email" />
//     <input
//       type="password"
//       style={{ padding: "10px" }}
//       placeholder="Input Password"
//     />
//     <FaEye onClick={() => displaypw(value)} size={32} />
//     <FaEyeSlash onClick={() => displaypw(value)} size={32} />
//   </div>
// );
