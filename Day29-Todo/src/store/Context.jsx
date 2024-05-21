import React, { useState } from "react";
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [TodoList, setTodoList] = useState([
    {
      id: 1,
      title:
        "Consectetur adipisicing elit. Labore id sapiente quis et ea aperiam voluptatum recusandae.",
      description:
        "Et quia sint unde quaerat enim rerum ipsam, cumque quibusdam laborum, amet sit!",
      completed: true,
    },
    {
      id: 2,
      title: "Repellendus rem ullam quibusdam qui, molestiae earum porro id in",
      description:
        "praesentium illum voluptas deserunt velit corporis laborum, exercitationem error iusto ex sunt.",
      completed: false,
    },
  ]);

  const [User, setUser] = useState("Guest");

  const [showNotification, setShowNotification] = useState("");

  return (
    <AppContext.Provider
      value={{
        TodoList,
        setTodoList,
        User,
        setUser,
        showNotification,
        setShowNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
