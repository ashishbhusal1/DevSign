import PropTypes from "prop-types";
import { FiMoreHorizontal } from "react-icons/fi";

import { UserCard } from "./";

function Row({ user, onSelect, onView }) {
  const BasicInfo = {
    fname: user.firstName,
    lname: user.lastName,
    image: user.image,
    email: user.email,
  };

  return (
    <div className={user.selected ? "row selected" : "row"} onClick={onView}>
      <div className="col col5" onClick={(e)=>e.stopPropagation()}>
        <input type="checkbox" onClick={onSelect} />
      </div>
      <div className="col col25">
        <UserCard info={BasicInfo} />
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
  user: PropTypes.object,
  onSelect: PropTypes.func,
};

export default Row;
