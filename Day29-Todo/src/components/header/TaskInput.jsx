import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../store/Context";

function TaskInput({ hideInput }) {
  let search = useRef(null);

  const {TodoList, setTodoList} = useContext(AppContext);

  const title=useRef('');
  const description=useRef('');

  const AddTask = () => {
    setTodoList([
      ...TodoList,
      {
        id: TodoList.length+1,
        title: title.current.value,
        description: description.current.value,
        completed: false,
      },
    ]);
    title.current.value='';
    description.current.value='';

    hideInput();
  };

  useEffect(() => {
    title.current.focus();
  });
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
