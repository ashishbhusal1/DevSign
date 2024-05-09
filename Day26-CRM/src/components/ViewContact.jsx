import { FiMail, FiSmartphone, FiGlobe, FiX } from "react-icons/fi";

function ViewContact({ selected, close }) {
  const UserSummery = [
    {
      id: 1,
      title: "Company",
      desc: selected.company.name,
    },
    {
      id: 2,
      title: "Company Address",
      desc: selected.company.address.address,
    },
    {
      id: 3,
      title: "Date of Birth",
      desc: selected.birthDate,
    },
    {
      id: 4,
      title: "Blood Group",
      desc: selected.bloodGroup,
    },
    {
      id: 5,
      title: "Gender",
      desc: selected.gender,
    },
    {
      id: 6,
      title: "University",
      desc: selected.university,
    },
    {
      id: 7,
      title: "Age",
      desc: selected.age,
    },
    {
      id: 8,
      title: "IP Address",
      desc: selected.ip,
    },
    {
      id: 9,
      title: "EIN Number",
      desc: selected.ein,
    },
    {
      id: 10,
      title: "SSN Number",
      desc: selected.ssn,
    },
  ];

  return (
    <>
      <div className="view-contact">
        <div className="brief">
          <div className="avatar">
            <img src={selected.image} alt={selected.firstName} />
          </div>

          <h3>{selected.firstName + " " + selected.lastName}</h3>

          <div className="seprator"></div>

          <ul>
            <li>
              <FiMail />
              <p>{selected.email}</p>
            </li>

            <li>
              <FiSmartphone />
              <p>{selected.phone}</p>
            </li>

            <li>
              <FiGlobe />
              <p>{selected.domain}</p>
            </li>
          </ul>

          <div className="seprator"></div>

          <h2>Message/Notification</h2>
          <div className="btn-secondary">
            <p>Send Message</p>
          </div>

          <div className="seprator"></div>

          <span>Delete Customer</span>
          <span>Archive Customer</span>
        </div>

        <div className="detail">
          <div className="close" onClick={close}>
            <FiX size={25} />
          </div>
          <div className="det-content">
            <div className="summery">
              <ul>
                {UserSummery.map((user) => {
                  return (
                    <li key={user.id}>
                      <p>{user.title}</p>
                      <h3>{user.desc}</h3>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="other">
              <div className="othblock">
                <p>Location</p>
                <div className="geolocation"></div>
              </div>

              <div className="othblock">
                <p>Tags</p>
                <ul className="tags">
                  <li>#technology</li>
                  <li>#bharatpur</li>
                  <li>#software</li>
                  <li>#development</li>
                </ul>
              </div>

              <div className="othblock">
                <p>Private Notes</p>
                <span>
                  Minima omnis, iste quia voluptas maxime porro velit ullam
                  optio fugiat laboriosam exercitationem possimus, veniam quod,
                  aperiam officiis natus eaque quam. Porro!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay" onClick={close}></div>
    </>
  );
}

export default ViewContact;
