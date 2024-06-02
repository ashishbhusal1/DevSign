import React, { memo } from "react";

function Child({ func }) {
  let valueFromParent = func();
  console.log(valueFromParent);

  return <></>;
}

export default memo(Child);
