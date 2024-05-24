import { VscChevronDown, VscLayoutSidebarLeftOff,
      VscAdd, VscSearch, VscCalendar, VscNotebook
 } from "react-icons/vsc";

function Navigation () {
      return (
            <div className="todo-sidebar">
                <div className="user-panel">
                  <div className="avatar">
                        <div className="image">
                              <img src="https://dummyjson.com/icon/michaelw/128" alt="Emily" />
                        </div>
                        <p>Emily</p>
                        <VscChevronDown color="black" size={18} />
                  </div>
                  <div className="nav-slide">
                        <VscLayoutSidebarLeftOff color="black" size={20} />
                  </div>
                </div>

                <div className="nav-default">
                  <ul>
                        <li>
                              <span><VscAdd color="" size={18} /></span>
                              <h3>Add Task</h3>
                        </li>

                        <li>
                              <span><VscSearch color="" size={18} /></span>
                              <h3>Search</h3>
                        </li>

                        <li>
                              <span><VscCalendar color="" size={18} /></span>
                              <h3>Today</h3>
                              <p>12</p>
                        </li>

                        <li>
                              <span><VscNotebook color="" size={18} /></span>
                              <h3>Upcoming</h3>
                        </li>
                  </ul>
                </div>

                  <div className="title">
                        <h4>My Projects</h4>
                  </div>

                <div className="nav-projects">
                  <ul>
                        <li>
                              <span style={{color: '#03A9F4'}}><h4>#</h4></span>
                              <h3>Mobile Apps</h3>
                              <p>35</p>
                        </li>

                        <li className="active">
                              <span><h4 style={{color: 'orange'}}>#</h4></span>
                              <h3>Government website</h3>
                              <p>19</p>
                        </li>

                        <li>
                              <span><h4 style={{color: '#9C27B0'}}>#</h4></span>
                              <h3>Restaurant UI/UX</h3>
                              <p>28</p>
                        </li>

                        <li>
                              <span><h4 style={{color: '#FF5722'}}>#</h4></span>
                              <h3>More projects</h3>
                              <p>2</p>
                        </li>

                        <li>
                              <span><h4 style={{color: '#4CAF50'}}>#</h4></span>
                              <h3>21 days challenge</h3>
                              <p>7</p>
                        </li>
                  </ul>
                </div>
            </div>

            
      );
}

export default Navigation;