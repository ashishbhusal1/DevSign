import React from "react";
import { CiMail, CiMobile1 } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function ContactDetails({ onClose, user }) {
  return (
    <div className="contactSection">
      <div className="user">
        <div className="imgUser">
          <img className="userImg" src={user.image} alt="User Profile" />
          <span>{user.firstName + " " + user.lastName}</span>
          <span></span>
          <div className="seperator"></div>
        </div>

        <div className="contacts">
          <div className="contactDetails">
            <CiMail />
            <span>{user.email}</span>
          </div>
          <div className="contactDetails">
            <CiMobile1 />
            <span>{user.phone}</span>
          </div>
          <div className="contactDetails">
            <CiMobile1 />
            <span>{user.domain}</span>
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
            <h2>{user.company.name}</h2>
          </div>
          <div className="moreDetails">
            <span>Company Address</span>
            <h2>{user.company.address.address}</h2>
          </div>
          <div className="moreDetails">
            <span>Date of Birth</span>
            <h2>{user.birthDate}</h2>
          </div>
          <div className="moreDetails">
            <span>Blood Group</span>
            <h2>{user.bloodGroup}</h2>
          </div>
          <div className="moreDetails">
            <span>Gender</span>
            <h2>{user.gender}</h2>
          </div>
          <div className="moreDetails">
            <span>University</span>
            <h2>{user.university}</h2>
          </div>
          <div className="moreDetails">
            <span>Age</span>
            <h2>{user.age}</h2>
          </div>
          <div className="moreDetails">
            <span>IP Address</span>
            <h2>{user.ip}</h2>
          </div>
          <div className="moreDetails">
            <span>EIN Number</span>
            <h2>{user.ein}</h2>
          </div>
          <div className="moreDetails">
            <span>SSN Number</span>
            <h2>{user.ssn}</h2>
          </div>
        </div>
        <div className="map">
          <div className="close">
            <IoMdClose onClick={onClose} />
          </div>
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
