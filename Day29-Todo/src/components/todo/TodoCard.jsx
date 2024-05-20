import { VscEdit, VscTrash } from "react-icons/vsc";

function TodoCard({item, onDelete}) {
  return (
    <li>
      <div className="radio"></div>
      <div className="content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <div className="action">
        <VscEdit />
        <VscTrash onClick={onDelete}/>
      </div>
      <div className="editaction">
        <button>Cancel</button>
        <button className="addbtn">Save</button>
      </div>
    </li>
  );
}

export default TodoCard;
