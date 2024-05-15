import NavBar from "../components/NavBar";
import DashBox from "../components/DashBox";
import Content from "../components/Content";
import Header from "../components/Header";
import { useContext } from "react";
import { AuthContext } from "../App";

function UserPage() {
      const { setAuth } = useContext(AuthContext);
  return (
    <div className="dashboard-app">
      <NavBar />
      <div className="tenant-content">
         <Header />
        <div className="page-content" id="page-content">
          <div className="tenant-dashboard">
            <div className="user">
              <div className="avatar">
                <img src="./../images/arjun-kandel.png" />
              </div>
              <div className="content">
                <h2>Hi, Arjun</h2>
                <p>Here your activity, take a moment to look at this</p>
              </div>

              <div className="ten-score">
                <div className="tscontent">
                  <h3>+150 Score</h3>
                  <p>Last Updated : June 14, 2021</p>
                </div>

                <div className="tsarrow">
                  <img src="./../images/up-arrow.svg" />
                </div>
              </div>
            </div>

            <div className="teandashboard">
              <ul className="dash-content">
                <li>
                  <div className="dash-box">
                    <div className="header">
                      <h3>Current Balance</h3>
                      <span>Manage</span>
                    </div>
                    <div className="content dbc-balance">
                      <h2>$1,699.00</h2>
                      <p>Monthly Payment</p>

                      <div className="npay">
                        <img src="./../images/calendar.svg" />
                        <p>Next Payment (July 21)</p>
                      </div>

                      <ul className="paymethod">
                        <li>
                          <img src="./../images/mastercard.svg" />
                          <p>Mastercard **** 2540</p>
                          <span>Change</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <DashBox />
                </li>

                <li>
                  <div className="dash-box">
                    <div className="dbimage">
                      <div className="count">
                        <p>12</p>
                        <img src="./../images/gallery.svg" />
                      </div>
                    </div>

                    <div className="content">
                      <div className="propery-detail">
                        <div className="title">
                          <h4>Unit: 102 . Ground Floor</h4>
                          <span>House</span>
                        </div>

                        <h3>Property Los Angeles</h3>
                        <p>Manhattan New York, NY 10001</p>

                        <ul className="features">
                          <li>Laundry</li>
                          <li>Furnished</li>
                          <li>25+</li>
                        </ul>
                      </div>

                      <ul className="main-feat">
                        <li>
                          <img src="./../images/bed-outline.svg" />
                          <p>2 Beds</p>
                        </li>

                        <li>
                          <img src="./../images/bathroom.svg" />
                          <p>1 Bath</p>
                        </li>

                        <li>
                          <img src="./../images/scale.svg" />
                          <p>1.2k sq. m.</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="dash-box">
                    <div className="header">
                      <h3>Agency</h3>
                    </div>
                    <div className="content">
                      <div className="agency-profile">
                        <div className="image">
                          <h2>G</h2>
                        </div>

                        <div className="content">
                          <h3>Gaire Agency</h3>
                          <p>gaire@gmail.com . +1 8548 014</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="dash-box">
                    <div className="header">
                      <h3>Recent Activities</h3>
                      <span>See All</span>
                    </div>
                    <Content />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
