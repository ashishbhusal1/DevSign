import { useEffect, useRef } from "react";

function TaskInput({ hideInput }) {
  let search = useRef(null);
  
  useEffect(() => {
    search.current.focus();
  });
  return (
    <div className="input-box">
      <div className="input">
        <input type="text" placeholder="Title" ref={search} />
        <input type="text" placeholder="Description" />
      </div>
      <div className="button">
        <button onClick={hideInput}>Cancel</button>
        <button className="addbtn">Add task</button>
      </div>
    </div>
  );
}

export default TaskInput;
