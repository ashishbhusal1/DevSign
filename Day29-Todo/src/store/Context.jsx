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

  const [AppSettings, setAppSettings] = useState({
    sidebar: "large",
    darkmode: false,
  });

  const [Projects, setProjects] = useState([
    {
      id: 1,
      title: "Mobile Apps",
      color: "#03a9f4",
      tasks: 35,
    },
    {
      id: 2,
      title: "Government Website",
      color: "orange",
      tasks: 19,
    },
    {
      id: 3,
      title: "Restaurant UI/UX",
      color: "#9c27b0",
      tasks: 28,
    },
    {
      id: 4,
      title: "More Projects",
      color: "#ff5722",
      tasks: 2,
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        TodoList,
        setTodoList,
        User,
        setUser,
        showNotification,
        setShowNotification,
        AppSettings,
        setAppSettings,
        Projects,
        setProjects,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
