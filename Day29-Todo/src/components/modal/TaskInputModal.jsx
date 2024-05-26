import { useState } from "react";

import TaskInput from "../header/TaskInput";

function TaskInputModal({ Hide }) {
  return (
    <>
      <div className="addtask-modal todo15s fadeInUp">
        <TaskInput hideInput={Hide} border={false} />
      </div>
      <div className="overlay"></div>
    </>
  );
}

export default TaskInputModal;
