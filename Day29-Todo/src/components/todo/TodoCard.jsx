import { useRef, useState } from "react";
import { VscEdit, VscTrash, VscCheck } from "react-icons/vsc";

function TodoCard({ item, Delete, Complete, Edit, EditCancel, EditSave }) {
  // input fields
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const EditTaskHandler = () => {
    EditSave(title, description);
  };

  return (
    <li className={item.completed ? "complete" : item.editMode ? "edit" : ""}>
      <div className="radio" onClick={Complete}>
        {item.completed && <VscCheck color="white" size={20} />}
      </div>
      {item.editMode ? (
        <div className="content">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      ) : (
        <div className="content">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      )}
      <div className="action">
        <VscEdit onClick={Edit} />
        <VscTrash onClick={Delete} />
      </div>
      <div className="editaction">
        <button onClick={EditCancel}>Cancel</button>
        <button className="addbtn" onClick={EditTaskHandler}>
          Save
        </button>
      </div>
    </li>
  );
}

export default TodoCard;
