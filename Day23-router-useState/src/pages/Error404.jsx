import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <>
      <h1>404 Error Page</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore commodi,
        rem ducimus saepe suscipit nam quidem itaque laboriosam sunt non tempora
        veniam nobis, facere quisquam nesciunt quo perspiciatis enim illum.
      </p>

      <Link to="/">Back to Home</Link>
    </>
  );
}

export default Error404;
