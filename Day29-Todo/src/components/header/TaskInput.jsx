import { useEffect, useContext, useRef, useState } from "react";
import { AppContext } from "./../../store/Context";

import { VscSymbolNumeric, VscCalendar } from "react-icons/vsc";
import { GrFlag } from "react-icons/gr";

// components
import ProjectsDrop from "../dropdown/ProjectsDrop";

//scripts
import TodoHandler from "../../javascript/TodoHandler";

function TaskInput({ hideInput, border }) {
  // context data
  const {
    TodoList,
    setTodoList,
    showNotification,
    setShowNotification,
    Projects,
  } = useContext(AppContext);

  // dropdown show/hide
  const [showProjDrop, setShowProjDrop] = useState(false);
  const [ProjSelected, setProJSelected] = useState("Project");

  // input fields as ref
  const title = useRef("");
  const description = useRef("");

  // add task funciton
  const AddTask = () => {
    TodoHandler.CreateNewTask(
      TodoList,
      title,
      description,
      setTodoList,
      setShowNotification
    );

    // disable write mode
    hideInput();
  };

  // auto height adjustment
  const textAreaAdjust = () => {
    description.current.style.height = "auto";
    description.current.style.height = description.current.scrollHeight + "px";
  };

  // project selected
  const ProjectSelected = (project) => {
    setShowProjDrop(false);
    setProJSelected(project.title);
  };

  // component on mounted (onload)
  useEffect(() => {
    title.current.focus();
  }, []);

  return (
    <div
      className="input-box todo20s fadeInDown"
      style={border ? {} : { border: "none" }}
    >
      <div className="input">
        <input
          className="title"
          type="Task Title"
          placeholder="Title"
          ref={title}
        />
        <textarea
          placeholder="Description"
          ref={description}
          onKeyUp={textAreaAdjust}
        ></textarea>
      </div>
      <div className="dueproj">
        <div className="btn">
          <VscCalendar color="#5f5f5f" size={16} />
          <p>Due Date</p>
        </div>

        <div className="btn" onClick={() => setShowProjDrop(true)}>
          <VscSymbolNumeric color="#5f5f5f" size={16} />
          <p>{ProjSelected}</p>
        </div>

        {showProjDrop && (
          <ProjectsDrop projects={Projects} selected={ProjectSelected} />
        )}

        <div className="btn">
          <GrFlag color="#5f5f5f" size={14} />
          <p>Priority</p>
        </div>
      </div>
      <div className="button">
        <button onClick={hideInput}>Cancel</button>
        <button className="addbtn" onClick={AddTask}>
          Add task
        </button>
      </div>
    </div>
  );
}

export default TaskInput;
