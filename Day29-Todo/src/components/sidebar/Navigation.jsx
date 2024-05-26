import { useContext, useState } from "react";
import { AppContext } from "../../store/Context";

import { createPortal } from "react-dom";

import {
  VscChevronDown,
  VscLayoutSidebarLeftOff,
  VscAdd,
  VscSearch,
  VscCalendar,
  VscNotebook,
} from "react-icons/vsc";

// component
import TaskInputModal from "../modal/TaskInputModal";

function Navigation() {
  // context for sidebar width handling
  const { AppSettings, setAppSettings, Projects, setProjects } =
    useContext(AppContext);
  const [showInputModal, setShowInputModal] = useState(false);

  // sidebar handler
  const HandleSidebar = () => {
    let sidewidth = AppSettings.sidebar;
    sidewidth = sidewidth == "large" ? "small" : "large";
    setAppSettings({ ...AppSettings, sidebar: sidewidth });
  };

  // task input

  return (
    <>
      <div
        className={
          AppSettings.sidebar == "large" ? "todo-sidebar" : "todo-sidebar small"
        }
      >
        <div className="user-panel">
          <div className="avatar">
            <div className="image">
              <img src="https://dummyjson.com/icon/michaelw/128" alt="Emily" />
            </div>
            <p>Emily</p>
            <VscChevronDown color="black" size={18} />
          </div>
          <div className="nav-slide" onClick={HandleSidebar}>
            <VscLayoutSidebarLeftOff color="black" size={20} />
          </div>
        </div>

        <div className="nav-default">
          <ul>
            <li onClick={() => setShowInputModal(true)}>
              <span>
                <VscAdd color="" size={18} />
              </span>
              <h3>Add Task</h3>
              <div className="hover">
                <p>Add Task</p>
              </div>
            </li>

            <li>
              <span>
                <VscSearch color="" size={18} />
              </span>
              <h3>Search</h3>
              <div className="hover">
                <p>Search</p>
              </div>
            </li>

            <li>
              <span>
                <VscCalendar color="" size={18} />
              </span>
              <h3>Today</h3>
              <p>12</p>
              <div className="hover">
                <p>Today</p>
              </div>
            </li>

            <li>
              <span>
                <VscNotebook color="" size={18} />
              </span>
              <h3>Upcoming</h3>
              <div className="hover">
                <p>Upcoming</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="title">
          <h4>My Projects</h4>
        </div>

        <div className="nav-projects">
          <ul>
            {Projects.map((project) => {
              return (
                <li key={project.id}>
                  <span style={{ color: project.color }}>
                    <h4>#</h4>
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.tasks}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {showInputModal &&
        createPortal(
          <TaskInputModal Hide={() => setShowInputModal(false)} />,
          document.body
        )}
    </>
  );
}

export default Navigation;
