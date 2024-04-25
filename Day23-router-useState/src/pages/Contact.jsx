import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Contact() {
  const [password, showPassword] = useState(false);
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
