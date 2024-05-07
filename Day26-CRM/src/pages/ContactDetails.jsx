import React from "react";
import { CiMail, CiMobile1 } from "react-icons/ci";

function ContactDetails() {
  return (
    <div className="contactSection">
      <div className="user">
        <div className="imgUser">
          <img className="userImg" src="./user.jpg" alt="User Profile" />
          <span>Matthis Oberholzer</span>
          <div className="seperator"></div>
        </div>

        <div className="contacts">
          <div className="contactDetails">
            <CiMail />
            <span>atuny0@sohu.com</span>
          </div>
          <div className="contactDetails">
            <CiMobile1 />
            <span>+63 791 675 8914</span>
          </div>
          <div className="contactDetails">
            <CiMobile1 />
            <span>slashdot.org</span>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="message">
          <h3>Message/Notifications</h3>
          <button>Send Message</button>
        </div>
        <div className="seperator"></div>
        <div className="links">
          <a href="">Delete Customer</a>
          <a href="">Archive Customer</a>
        </div>
      </div>
      <div className="userDetails">
        <div className="details">
          <div className="moreDetails">
            <span>Company</span>
            <h2>Blanda-O'Keefe</h2>
          </div>
          <div className="moreDetails">
            <span>Company Address</span>
            <h2>Blanda-O'Keefe</h2>
          </div>
          <div className="moreDetails">
            <span>Date of Birth</span>
            <h2>Blanda-O'Keefe</h2>
          </div>
          <div className="moreDetails">
            <span>Blood Group</span>
            <h2>Blanda-O'Keefe</h2>
          </div>
          <div className="moreDetails">
            <span>Gender</span>
            <h2>Blanda-O'Keefe</h2>
          </div>
          <div className="moreDetails">
            <span>University</span>
            <h2>Blanda-O'Keefe</h2>
          </div>
          <div className="moreDetails">
            <span>Age</span>
            <h2>Blanda-O'Keefe</h2>
          </div>
          <div className="moreDetails">
            <span>IP Address</span>
            <h2>Blanda-O'Keefe</h2>
          </div>
          <div className="moreDetails">
            <span>EIN Number</span>
            <h2>Blanda-O'Keefe</h2>
          </div>
          <div className="moreDetails">
            <span>SSN Number</span>
            <h2>Blanda-O'Keefe</h2>
          </div>
        </div>
        <div className="map">
          <div className="location">
            <span>Location</span>
            <img src="location.png" alt="" />
          </div>
          <div className="tags">
            <h5>Tags</h5>
            <div className="tag1">
              <span>#technology</span>
              <span>#bharatpur</span>
            </div>
            <div className="tag1">
              <span>#software</span>
              <span>#web development</span>
            </div>
          </div>
          <div className="privateNotes">
            <span>Private Notes</span>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
