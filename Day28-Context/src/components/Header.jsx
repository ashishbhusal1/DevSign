import React, { useContext } from "react";
import AuthContext from '../App';

function Header() {
  

  const LogoutHandler = () => {
    setAuth("guest");
  };
  return (
    <div className="content-header">
      <ul>
        <li>
          <h3>Dashboard</h3>
        </li>
        <li>
          <input
            type="text"
            placeholder="Search in Dashboard..."
            name="search"
            id="search"
          />
        </li>
        <li>
          <div className="tenant" id="ownerprofile">
            <div className="notification">
              <img src="./../images/notification.svg" />
              <span>2</span>
            </div>

            <div className="user" onClick={LogoutHandler}>
              <h3>Hi, Arjun</h3>
              <div className="avatar">
                <img src="./../images/arjun-kandel.png" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
