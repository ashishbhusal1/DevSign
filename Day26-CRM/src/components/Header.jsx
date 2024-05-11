import { FiFilter, FiDelete, FiUserPlus } from "react-icons/fi";

function Header({ count, selected, Delete,Add }) {
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

        <div
          className={selected ? "btn-primary" : "btn-primary btn-disabled"}
          onClick={Delete}
        >
          <FiDelete />
          <p>Delete</p>
        </div>

        <div className="btn-secondary" onClick={Add}>
          <FiUserPlus />
          <p>Add Contacts</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
