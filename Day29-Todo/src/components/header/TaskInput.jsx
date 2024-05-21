import { useEffect, useContext, useRef } from "react";
import { AppContext } from "./../../store/Context";

function TaskInput({ hideInput }) {
  // context data
  const { TodoList, setTodoList, showNotification, setShowNotification } =
    useContext(AppContext);

  // input fields
  const title = useRef("");
  const description = useRef("");

  // add task funciton
  const AddTask = () => {
    setTodoList([
      ...TodoList,
      {
        id: TodoList.length + 1,
        title: title.current.value,
        description: description.current.value,
        completed: false,
      },
    ]);

    title.current.value = "";
    description.current.value = "";

    // disable write mode
    hideInput();

    // show notification
    setShowNotification("Task Created");

    // hide notification
    setTimeout(() => {
      setShowNotification("");
    }, 3000);
  };

  // component on mounted
  useEffect(() => {
    title.current.focus();
  }, []);

  return (
    <div className="input-box">
      <div className="input">
        <input type="text" placeholder="Title" ref={title} />
        <input type="text" placeholder="Description" ref={description} />
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
