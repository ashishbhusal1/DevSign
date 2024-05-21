import React from "react";
import { VscBell } from "react-icons/vsc";

function Notification({action}) {
  return (
    <div className="notification">
      <VscBell color="white" size={25} />
      <p>{action}</p>
    </div>
  );
}

export default Notification;
