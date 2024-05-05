import { FiFilter, FiDelete, FiUserPlus } from "react-icons/fi";

function Header({ count, del }) {
  return (
    <div className="cp-header">
      <div className="appname">
        <h1>Contacts</h1>
        <p>{count} Total</p>
      </div>

      <div className="actions">
        <div className="btn-primary">
          <FiFilter />
          <p>Filter</p>
        </div>

        <div className={del ? "btn-primary" : " btn-disabled"}>
          <FiDelete />
          <p>Delete</p>
        </div>

        <div className="btn-secondary">
          <FiUserPlus />
          <p>Add Contacts</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
