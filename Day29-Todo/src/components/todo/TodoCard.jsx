import { VscEdit, VscTrash } from "react-icons/vsc";

function TodoCard () {
    return (
        <li>
            <div className="radio"></div>
            <div className="content">
                <h3>You don't have task to do, you can add tasks here.</h3>
                <p>description goes here.</p>
            </div>
            <div className="action">
                <VscEdit />
                <VscTrash />
            </div>
            <div className="editaction">
                <button>Cancel</button>
                <button className="addbtn">Save</button>
            </div>
        </li>
    );
}

export default TodoCard;