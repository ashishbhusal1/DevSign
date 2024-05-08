import PropTypes from "prop-types";
import { FiMoreHorizontal } from "react-icons/fi";
import { UserCard } from "./";

function Row({ user, onSelect, onToggleSelect }) {
  const basicInfo = {
    fname: user.firstName,
    lname: user.lastName,
    image: user.image,
    email: user.email,
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    event.stopPropagation(); // Prevents the row click event
    onToggleSelect(user.id); // Toggle the selection state
  };

  return (
    <div
      className={user.selected ? "row selected" : "row"}
      onClick={() => onSelect(user)}
    >
      <div className="col col5" onClick={(e) => e.stopPropagation()}>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={user.selected || false}
        />
      </div>
      <div className="col col25">
        <UserCard info={basicInfo} />
      </div>
      <div className="col col20">
        <p>{user.company.name}</p>
      </div>
      <div className="col col20">
        <p>{user.phone}</p>
      </div>
      <div className="col col20">
        <p>{user.address.city}</p>
      </div>
      <div className="col col10">
        <FiMoreHorizontal />
      </div>
    </div>
  );
}

Row.propTypes = {
  user: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  onToggleSelect: PropTypes.func.isRequired,
};

export default Row;
