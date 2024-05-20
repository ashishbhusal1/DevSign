import { useState } from "react";
import React from "react";

const AppContext = React.createContext();

function AppProvider({children}) {
  const [TodoList, setTodoList] = useState([
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quidem!",
      completed: false,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quidem!",
      completed: false,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quidem!",
      completed: false,
    },
  ]);
  return (
    <AppContext.Provider value={{ TodoList, setTodoList }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
