import { useState } from "react";

// component
import AppSearch from "./AppSearch";
import AddTask from "./AddTask";
import TaskInput from "./TaskInput";

function Header() {
  let [writeMode, setWriteMode] = useState(false);

  return (
    <header>
      <AppSearch />
      {writeMode ? null : <AddTask showInput={() => setWriteMode(true)} />}
      {writeMode && (
        <TaskInput hideInput={() => setWriteMode(false)} border={true} />
      )}
    </header>
  );
}

export default Header;
